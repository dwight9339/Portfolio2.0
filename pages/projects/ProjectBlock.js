import { 
  projectBlock,
  title,
  tagline
} from "../../styles/projectBlock.module.scss";
import SlideShow from "../../components/SlideShow";
import { useRouter } from "next/router";

export default ({ project }) => {
  const router = useRouter();

  return (
    <div 
      className={projectBlock}
      onClick={() => router.push(`/projects/${project.title}`)}
    >
      <p className={title}>{project.title}</p>
      <p className={tagline}>{project.tagline}</p>
      <SlideShow slides={project.imageUrls} />
    </div>
  )
}