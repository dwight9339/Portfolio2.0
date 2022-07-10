import { 
  projectBlock,
  title
} from "../../styles/projectBlock.module.scss";
import SlideShow from "../../components/SlideShow";

export default ({ project }) => {
  return (
    <div className={projectBlock}>
      <p className={title}>{project.title}</p>
      <SlideShow slides={project.imageUrls} />
    </div>
  )
}