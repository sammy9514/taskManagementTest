import { Router } from "express";
import {
  addToProject,
  createTask,
  deletee,
  getAll,
  viewProjectOne,
} from "../controller/taskController";

const router: Router = Router();

router.route("/createTask").post(createTask);
router.route("/getAll").get(getAll);
router.route("/view-one-project/:projectID").get(viewProjectOne);
router.route("/del").delete(deletee);
router.route("/addToProject/:projectID").patch(addToProject);

export default router;
