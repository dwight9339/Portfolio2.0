import { 
  projectBlock,
  title,
  tagline
} from "styles/projectBlock.module.scss";
import SlideShow from "components/SlideShow";
import { useRouter } from "next/router";
import useElementSize from "hooks/useElementSize";

const ProjectBlock = ({ project }) => {
  const router = useRouter();
  const [blockRef, { width: blockWidth }] = useElementSize();

  if (!project) return null;

  return (
    <div 
      ref={blockRef}
      className={projectBlock}
      onClick={() => router.push(`/projects/${encodeURIComponent(project.title)}`)}
    >
      <p className={title}>{project.title}</p>
      <p className={tagline}>{project.tagline}</p>
      <SlideShow 
        imageUrls={project.screenshotUrls} 
        width={blockWidth}
      />
    </div>
  )
}

export default ProjectBlock;