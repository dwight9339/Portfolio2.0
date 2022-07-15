import { 
  projectBlock,
  title,
  tagline
} from "styles/projectBlock.module.scss";
import SlideShow from "components/SlideShow";
import { useRouter } from "next/router";

const ProjectBlock = ({ project }) => {
  if (!project) return null;
  const router = useRouter();

  return (
    <div 
      className={projectBlock}
      onClick={() => router.push(`/projects/${encodeURIComponent(project.title)}`)}
    >
      <p className={title}>{project.title}</p>
      <p className={tagline}>{project.tagline}</p>
      <SlideShow slides={project.imageUrls} />
    </div>
  )
}

export default ProjectBlock;