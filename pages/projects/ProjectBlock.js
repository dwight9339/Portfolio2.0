import { projectBlock } from "../../styles/projectsPage.module.scss";

export default ({ project }) => {
  return (
    <div className={projectBlock}>
      <p>{project.title}</p>
    </div>
  )
}