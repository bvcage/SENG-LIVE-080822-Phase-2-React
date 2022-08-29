const ProjectListItem = ({ project }) => {
    const { name, image, about, link, phase } = project;
    return (
        <li className='card'>
            <a href ='./projects/1'>
                <figure className='image'>
                    <img src={image} alt={name} />
                    <button className='claps'>👏🏻0</button>
                </figure>
            </a>
            <section className='details'>
                <h4>{name}</h4>
                <p>{about}</p>
                <p>
                    <a href={link}>link</a>
                </p>
            </section>
            <footer className='extra'>
                <span className='badge blue'>{phase}</span>
            </footer>
        </li>
    )
}

export default ProjectListItem;