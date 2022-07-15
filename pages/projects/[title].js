import Head from "next/head"
import Image from "next/image";
import fsPromises from 'fs/promises';
import path from 'path'
import {
  projectPage,
  projectInfoCard,
  title,
  description,
  stack,
  linksCard,
  stackItemsContainer,
  slideshowContainer
} from "styles/projectPage.module.scss";
import SlideShow from "components/SlideShow";

const ProjectPage = ({ project }) => {
  return (
    <div className={projectPage}>
      <Head>
        <title>{`Project - ${project.title}`}</title>
      </Head>
      <div className={projectInfoCard}>
        <p className={title}>{project.title}</p>
        <p className={description}>{project.description}</p>
        <div className={slideshowContainer}>
          <SlideShow slides={project.imageUrls} /> 
        </div>
        <div className={stack}>
          <h1>Stack</h1>
          <div className={stackItemsContainer}>
            {project.stack.map((item, i) => {
              return <p key={i}>{item}</p>; 
            })}
          </div>
        </div>
      </div>
      <div className={linksCard}>
        <a href={project.appUrl}>
          <Image
            src="/images/go_icon.svg"
            width="40px"
            height="40px"
          />
          <p>Go to app</p>
        </a>
        <a href={project.repoUrl}>
          <Image
            src="/images/github_logo_small.svg"
            width="40px"
            height="40px"
          />
          <p>See the code</p>
        </a>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const dataFilePath = path.join(process.cwd(), "/pages/projects/projects.json");
  const rawData = await fsPromises.readFile(dataFilePath);
  const projects = JSON.parse(rawData);

  return {
    paths: projects.map((project) => {
      return {
        params: {title: encodeURIComponent(project.title)}
      };
    }),
    fallback: false
  }
}

export const getStaticProps = async({ params }) => {
  const dataFilePath = path.join(process.cwd(), "/pages/projects/projects.json");
  const rawData = await fsPromises.readFile(dataFilePath);
  const projects = JSON.parse(rawData);
  const project = projects.find((project) => {
    return project.title === decodeURIComponent(params.title);
  });

  return {
    props: {
      project
    }
  };
}

export default ProjectPage;