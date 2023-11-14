import { Document, Schema, model } from "mongoose";

interface iTask {
  task: {};
}

interface iTaskData extends iTask, Document {}

const taskModel = new Schema<iTaskData>(
  {
    task: {
      type: {},
    },
  },
  {
    timestamps: true,
  }
);

export default model<iTaskData>("task", taskModel);
