import projects from '../projects';
import ProjectListItem from "./ProjectListItem";

const ProjectList = () => {
    const renderedProjects = projects.map(projectObj => {
        return <ProjectListItem project={projectObj} />
    })
    return (
        <section>
            <h1>All Projects</h1>
            <ul className='cards'>
                {renderedProjects}
            </ul>
        </section>
    )
}

export default ProjectList;