// dynamic service Selection

const services = [
    {
        name: 'Service 1',
        description: '   Our expert team will ensure a personalized experience, addressing any questions or concerns you may have. ',
        price: 99.99,
        duration: '1 hour',
        icon: '🌟' // Add your service 1 icon here
    },
    {
        name: 'Service 2',
        description: ' Our skilled professionals will work closely with you to address complex challenges and provide practical solutions',
        price: 149.99,
        duration: '2 hours',
        icon: '⚙️' // Add your service 2 icon here
    },
    {
        name: 'Service 3',
        description: 'ith Service 3, indulge in a relaxing and creative session. Our talented artists will guide you through a 90-minute experience, helping you unleash your artistic potential.',
        price: 149.99,
        duration: '2 hours',
        icon: '⚙️' // Add your service 2 icon here
    },
    // Add more service objects as needed
];

function generateServicesSection(services) {
    // Retrieve the container element
    const container = document.getElementById('services-container');

    // Clear the container
    container.innerHTML = '';

    if (services.length === 0) {
        const noServiceMessage = document.createElement('p');
        noServiceMessage.textContent = 'No services available.';
        container.appendChild(noServiceMessage);
        return;
    }

    // Iterate over the services data structure
    services.forEach(service => {
        // Create a new service element
        const serviceElement = document.createElement('div');
        serviceElement.className = 'service';

        // Create and append the service icon
        const iconElement = document.createElement('div');
        iconElement.className = 'service-icon';
        iconElement.textContent = service.icon;
        serviceElement.appendChild(iconElement);

        // Create and append the content for the service element
        serviceElement.innerHTML += `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <p>Price: ${service.price}</p>
            <p>Duration: ${service.duration}</p>
        `;

        // Append the service element to the container
        container.appendChild(serviceElement);
    });
}

// Call the function to generate the services section
generateServicesSection(services);

// team members section

const teamMembers = [
    {
        name: 'John Doe',
        role: 'CEO',
        bio: 'John Doee is the CEO of our company. He has extensive experience in the industry and is known for his visionary leadership and strategic decision-making. Under his guidance, our company has achieved remarkable growth and success.',
        photo: '../styles/jin.jpg'
    },
    {
        name: 'Jane Smith',
        role: 'CTO',
        bio: 'Jane Smith is the Chief Technology Officer (CTO) of our company. She is a tech enthusiast with a passion for innovation and cutting-edge technologies. With her technical expertise and leadership skills, she plays a key role in driving our company\'s technological advancements.',
        photo: '../styles/jin.jpg'
    },
    // Add more team members as needed
];

function generateTeamMembersSection() {
    // Retrieve the container element
    const container = document.getElementById('team-members-container');

    // Clear the container
    container.innerHTML = '';

    // Iterate over the team members data structure
    teamMembers.forEach(member => {
        // Create a new team member element
        const memberElement = document.createElement('div');

        // Set the class for the member element
        memberElement.className = 'team-member';

        // Create and append the content for the member element
        memberElement.innerHTML = `
            <img src="${member.photo}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
            <p>${member.bio}</p>
        `;

        // Append the member element to the container
        container.appendChild(memberElement);
    });
}

// Call the function to generate the team members section
generateTeamMembersSection();

// portfolio section
const portfolioData = [
    {
        name: 'Project 1',
        description: 'Project 1 is a website designed to showcase an online store. It features a user-friendly interface and various product categories for easy navigation. The site is responsive, ensuring a seamless shopping experience on different devices.',
        image: '../styles/project.jpg'
    },
    {
        name: 'Project 2',
        description: 'Project 2 is a mobile app for tracking fitness activities. Users can log their workouts, set fitness goals, and monitor their progress. The app includes a personalized dashboard and charts to visualize workout data.',
        image: '../styles/project.jpg'
    },
    // Add more projects as needed
];

function generatePortfolioElements() {
    const portfolioContainer = document.getElementById('portfolio');

    portfolioData.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';

        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <img src="${project.image}" alt="${project.name}">
        `;

        portfolioContainer.appendChild(projectElement);
    });
}

// Call the function to generate the portfolio section
generatePortfolioElements();







console.log("hello I am connected");