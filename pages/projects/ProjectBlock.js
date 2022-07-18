import { 
  projectBlock,
  title,
  tagline
} from "styles/projectBlock.module.scss";
import SlideShow from "components/SlideShow";
import { useRouter } from "next/router";

const ProjectBlock = ({ project }) => {
  const router = useRouter();

  if (!project) return null;

  return (
    <div 
      className={projectBlock}
      onClick={() => router.push(`/projects/${encodeURIComponent(project.title)}`)}
    >
      <p className={title}>{project.title}</p>
      <p className={tagline}>{project.tagline}</p>
      <SlideShow 
        imageUrls={project.imageUrls} 
      />
    </div>
  )
}

export default ProjectBlock;