//No need to change code other than the last four methods
import { ObjectId } from 'mongodb';
import { getClient, getDB } from '../../config/mongodb.js';

const collectionName = 'students';

class studentRepository {


    async addStudent(studentData) {
        const db = getDB();
        await db.collection(collectionName).insertOne(studentData);
    }

    async getAllStudents() {
        const db = getDB();
        const students = await db.collection(collectionName).find({}).toArray();
        return students;
    }


    //You need to implement methods below:

    async createIndexes() {
        try {
            const db = getDB();
            await db.collection(collectionName).createIndex({ name: 1 });
            await db.collection(collectionName).createIndex({ age: 1, grade: -1 });

        } catch (err) {
            console.log(err);
            throw new Error("Some error occured while creating Indices...")
        }
    }

    async getStudentsWithAverageScore() {
        // db.students
        //     .aggregate([
        //         { $unwind: "$assignments" },
        //         {
        //             $group:
        //             {
        //                 _id: "$name",
        //                 avgScore: { $avg: "$assignments.score" }
        //             }
        //         }
        //     ])  // mongo shell command.......
        try {
            const db = getDB();
            const result = await db.collection(collectionName)
                .aggregate([
                    { $unwind: "$assignments" },
                    {
                        $group:
                        {
                            _id: "$name",
                            averageScore: { $avg: "$assignments.score" }
                        },

                    }, {
                        $project: {
                            _id: 0,
                            name: "$_id",
                            averageScore: "$averageScore"

                        }
                    }
                ]).toArray();

            return result;
        } catch (err) {
            console.log(err);
            throw new Error("Something went wrong.")
        }
    }

    async getQualifiedStudentsCount() {
        // Only include students with age greater than 9, 
        // a grade less than or equal to 'B', 
        // an assignment titled 'math', 
        // and a score of 60 or higher.
        try {
            const db = getDB();
            const result = await db.collection(collectionName)
                .aggregate([
                    { $unwind: "$assignments" },
                    {
                        $match: {
                            age: { $gt: 9 },
                            grade: { $in: ["B", "C", "D", "E", "F"] },
                            "assignments.title": "Math",
                            "assignments.score": { $gte: 60 }
                        }
                    },
                    {
                        $group: {
                            _id: {},
                            count: { $sum: 1 }
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            count: 1
                        }
                    }
                ]).toArray();

            return result[0].count || 0;
        } catch (err) {
            console.log(err);
            throw new Error("Something went wrong.")
        }
    }

    async updateStudentGrade(id, credit) {
        const client = getClient();
        const session = client.startSession();

        // await session.startTransaction();

        try {
            session.startTransaction();

            const db = getDB(); // Replace with your database name
            const collection = db.collection(collectionName);

            // Step 1: Update the student's assignment score
            await collection.updateOne(
                { _id: id },
                { $inc: { "assignments.$.score": credit } },
                { session }
            );

            // Step 2: Recalculate the student's average score
            console.log(id);
            const student = await collection.aggregate([
                { $match: { _id: id } },
                { $unwind: "$assignments" },
                {
                    $group: {
                        _id: "$name",
                        averageScore: { $avg: "$assignments.score" }
                    }
                }
            ], { session }).toArray();

            if (student.length === 0) {
                throw new Error('Student not found');
            }

            const averageScore = student[0].averageScore;

            // Step 3: Update the student's grade based on the average score
            let grade;
            if (averageScore >= 90) {
                grade = 'A';
            } else if (averageScore >= 80) {
                grade = 'B';
            } else if (averageScore >= 70) {
                grade = 'C';
            } else if (averageScore >= 60) {
                grade = 'D';
            } else {
                grade = 'F';
            }

            await collection.updateOne(
                { _id: id },
                { $set: { grade: grade } },
                { session }
            );

            await session.commitTransaction();
            return { name: student[0]._id, averageScore, grade };

        } catch (err) {
            await session.abortTransaction();
            console.log(err);
            throw new Error("Something went wrong while updating the student's grade.");
        } finally {
            session.endSession();
        }
    }

};

export default studentRepository;
