import { Request, Response } from "express";
import taskModel from "../model/taskModel";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { task } = req.body;
    const project = await taskModel.create({
      task: {
        todo: {
          title: "todo",
          data: [task],
        },
        progress: {
          title: "todo",
          data: [],
        },
      },
    });

    res.status(200).json({
      message: "created",
      data: project,
    });
  } catch (error) {
    res.status(404).json({
      message: "failed to create",
    });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const project = await taskModel.find({});

    res.status(200).json({
      message: "done getting",
      data: project,
    });
  } catch (error) {
    res.status(404).json({
      message: "failed to get",
    });
  }
};

export const viewProjectOne = async (req: Request, res: Response) => {
  try {
    const { projectID } = req.params;
    const project = await taskModel.findById(projectID);

    return res.status(200).json({
      message: "one project found",
      data: project,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const addToProject = async (req: Request, res: Response) => {
  try {
    const { projectID } = req.params;
    const { title, task, name } = req.body;

    const project: any = await taskModel.findById(projectID);

    let file = {
      [title]: {
        id: title,
        data: [],
      },
    };

    const newProject = await taskModel.findByIdAndUpdate(
      projectID,
      {
        task: {
          ...project?.task,

          [title]: {
            id: title,
            data: [task],
            name,
          },
        },
      },
      { new: true }
    );

    console.log(project.task);
    return res.status(200).json({
      message: "one project deleted",
      data: newProject,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const deletee = async (req: Request, res: Response) => {
  try {
    const del = await taskModel.deleteMany({});
    res.status(200).json({
      message: "done",
      data: del,
    });
  } catch (error) {
    res.status(404).json({
      message: "nuuu",
    });
  }
};
