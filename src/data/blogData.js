const blogPosts = [
  // Page 1
  {
    title: 'Understanding the Basics of AI',
    author: 'Jane Doe',
    date: '2023-05-01',
    category: 'AI',
    tags: ['AI', 'Machine Learning', 'Technology', 'Future'],
    content: 'Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, and self-correction...'
  },
  {
    title: 'How to Ace Remote Work',
    author: 'John Smith',
    date: '2023-04-20',
    category: 'Jobs',
    tags: ['Remote Work', 'Productivity', 'Work-Life Balance', 'Collaboration'],
    content: 'Remote work has become increasingly popular in recent years. To succeed in a remote work environment, it’s important to establish a routine, communicate effectively, and set boundaries...'
  },
  {
    title: 'Top Skills for Web Developers in 2024',
    author: 'Alice Johnson',
    date: '2023-06-15',
    category: 'Web Development',
    tags: ['Skills', 'Web Development', 'Coding', 'JavaScript'],
    content: 'The field of web development is always evolving. In 2024, the top skills for web developers include proficiency in JavaScript, knowledge of frameworks like React and Angular, and understanding of web accessibility...'
  },
  {
    title: 'Balancing Work and Life',
    author: 'Bob Brown',
    date: '2023-03-22',
    category: 'Jobs',
    tags: ['Work-Life Balance', 'Productivity', 'Mental Health', 'Wellness'],
    content: 'Finding a balance between work and personal life is crucial for overall well-being. This involves managing time effectively, setting priorities, and taking breaks when needed...'
  },
  {
    title: 'Designing User-Centered Websites',
    author: 'Carol Green',
    date: '2023-02-18',
    category: 'Web Development',
    tags: ['User-Centered Design', 'User Experience', 'Web Development', 'Accessibility'],
    content: 'User-centered design is a crucial aspect of web development. It involves designing websites with the user’s needs and preferences in mind, ensuring the site is accessible and easy to navigate...'
  },

  // Page 2 (5 more blog posts)
  {
    title: 'The Future of Remote Work',
    author: 'Jane Doe',
    date: '2023-05-10',
    category: 'Jobs',
    tags: ['Remote Work', 'Future', 'Technology', 'Jobs'],
    content: 'The future of remote work looks promising, with many companies adopting flexible work arrangements. This trend is expected to continue, driven by advances in technology and changing employee preferences...'
  },
  {
    title: 'AI in Everyday Life',
    author: 'John Smith',
    date: '2023-04-25',
    category: 'AI',
    tags: ['AI', 'Everyday Life', 'Technology', 'Innovation'],
    content: 'Artificial Intelligence (AI) is increasingly becoming a part of our everyday lives, from voice assistants to personalized recommendations. Understanding how AI works and its applications can help us better navigate this technology...'
  },
  {
    title: 'Building Collaborative Teams',
    author: 'Alice Johnson',
    date: '2023-06-20',
    category: 'Jobs',
    tags: ['Collaboration', 'Team Building', 'Leadership', 'Productivity'],
    content: 'Effective collaboration is key to building successful teams. This involves clear communication, mutual respect, and leveraging diverse skill sets to achieve common goals...'
  },
  {
    title: 'Advanced JavaScript Techniques',
    author: 'Bob Brown',
    date: '2023-03-28',
    category: 'Web Development',
    tags: ['JavaScript', 'Web Development', 'Coding', 'Programming'],
    content: 'As a web developer, mastering advanced JavaScript techniques can significantly enhance your coding skills. This includes understanding closures, async/await, and module patterns...'
  },
  {
    title: 'Enhancing User Experience',
    author: 'Carol Green',
    date: '2023-02-22',
    category: 'Web Development',
    tags: ['User Experience', 'Design', 'Web Development', 'Accessibility'],
    content: 'Enhancing user experience (UX) involves creating websites that are not only visually appealing but also easy to use and navigate. This requires a deep understanding of user behavior and preferences...'
  },

  // Continue adding blog data for pages 3 to 6
  // Page 3
  {
    title: 'AI and Machine Learning',
    author: 'Jane Doe',
    date: '2023-07-01',
    category: 'AI',
    tags: ['AI', 'Machine Learning', 'Data Science', 'Technology'],
    content: 'AI and machine learning are transforming industries by enabling new levels of automation and insights. Understanding these technologies is essential for staying competitive in today’s market...'
  },
  {
    title: 'Maximizing Productivity in Remote Teams',
    author: 'John Smith',
    date: '2023-07-05',
    category: 'Jobs',
    tags: ['Remote Work', 'Productivity', 'Team Building', 'Collaboration'],
    content: 'Maximizing productivity in remote teams requires clear communication, setting expectations, and using the right tools. This ensures that team members stay aligned and work efficiently...'
  },
  {
    title: 'Latest Trends in Web Development',
    author: 'Alice Johnson',
    date: '2023-07-10',
    category: 'Web Development',
    tags: ['Web Development', 'Trends', 'Technology', 'Innovation'],
    content: 'Web development trends are constantly evolving, with new frameworks, tools, and best practices emerging. Staying updated with these trends is crucial for building modern, efficient websites...'
  },
  {
    title: 'Work-Life Balance Tips for Remote Workers',
    author: 'Bob Brown',
    date: '2023-07-15',
    category: 'Jobs',
    tags: ['Work-Life Balance', 'Remote Work', 'Productivity', 'Wellness'],
    content: 'Achieving work-life balance as a remote worker involves setting boundaries, taking regular breaks, and prioritizing self-care. These practices help maintain mental and physical health...'
  },
  {
    title: 'The Importance of Accessibility in Web Design',
    author: 'Carol Green',
    date: '2023-07-20',
    category: 'Web Development',
    tags: ['Accessibility', 'Web Development', 'Design', 'User Experience'],
    content: 'Accessibility is a critical aspect of web design, ensuring that websites are usable by everyone, including people with disabilities. Implementing accessible design practices improves the overall user experience...'
  },

  // Page 4
  {
    title: 'Understanding AI Ethics',
    author: 'Jane Doe',
    date: '2023-08-01',
    category: 'AI',
    tags: ['AI', 'Ethics', 'Technology', 'Future'],
    content: 'AI ethics is an important field that addresses the moral implications and societal impact of AI technologies. It involves ensuring that AI systems are fair, transparent, and accountable...'
  },
  {
    title: 'Effective Communication in Remote Teams',
    author: 'John Smith',
    date: '2023-08-05',
    category: 'Jobs',
    tags: ['Remote Work', 'Communication', 'Team Building', 'Collaboration'],
    content: 'Effective communication is crucial for the success of remote teams. It involves using the right tools, setting clear expectations, and fostering an environment of openness and trust...'
  },
  {
    title: 'Mastering React for Web Development',
    author: 'Alice Johnson',
    date: '2023-08-10',
    category: 'Web Development',
    tags: ['React', 'Web Development', 'JavaScript', 'Frameworks'],
    content: 'React is a powerful JavaScript library for building user interfaces. Mastering React involves understanding its core concepts, such as components, state, and props, as well as advanced features like hooks and context...'
  },
  {
    title: 'Maintaining Productivity While Working from Home',
    author: 'Bob Brown',
    date: '2023-08-15',
    category: 'Jobs',
    tags: ['Productivity', 'Remote Work', 'Work-Life Balance', 'Wellness'],
    content: 'Maintaining productivity while working from home can be challenging. It requires setting up a dedicated workspace, creating a schedule, and minimizing distractions...'
  },
  {
    title: 'Designing for Mobile Users',
    author: 'Carol Green',
    date: '2023-08-20',
    category: 'Web Development',
    tags: ['Mobile Design', 'User Experience', 'Web Development', 'Accessibility'],
    content: 'Designing for mobile users involves creating responsive, user-friendly interfaces that work well on a variety of devices. This requires a mobile-first approach and understanding of touch interactions...'
  },

  // Page 5
  {
    title: 'The Impact of AI on Society',
    author: 'Jane Doe',
    date: '2023-09-01',
    category: 'AI',
    tags: ['AI', 'Society', 'Technology', 'Future'],
    content: 'The impact of AI on society is profound, affecting various sectors such as healthcare, finance, and transportation. It’s important to understand both the benefits and challenges associated with AI...'
  },
  {
    title: 'Building Trust in Remote Teams',
    author: 'John Smith',
    date: '2023-09-05',
    category: 'Jobs',
    tags: ['Remote Work', 'Trust', 'Team Building', 'Collaboration'],
    content: 'Building trust in remote teams is essential for effective collaboration. This involves clear communication, consistency, and creating opportunities for team members to connect and build relationships...'
  },
  {
    title: 'Modern CSS Techniques for Web Developers',
    author: 'Alice Johnson',
    date: '2023-09-10',
    category: 'Web Development',
    tags: ['CSS', 'Web Development', 'Design', 'Technology'],
    content: 'Modern CSS techniques enable web developers to create responsive, visually appealing websites. This includes using Flexbox, Grid, and CSS variables, as well as understanding the latest CSS specifications...'
  },
  {
    title: 'Staying Motivated While Working Remotely',
    author: 'Bob Brown',
    date: '2023-09-15',
    category: 'Jobs',
    tags: ['Motivation', 'Remote Work', 'Productivity', 'Wellness'],
    content: 'Staying motivated while working remotely can be challenging. It involves setting clear goals, staying connected with colleagues, and finding ways to stay engaged and inspired...'
  },
  {
    title: 'Optimizing Website Performance',
    author: 'Carol Green',
    date: '2023-09-20',
    category: 'Web Development',
    tags: ['Performance', 'Web Development', 'Optimization', 'User Experience'],
    content: 'Optimizing website performance is crucial for providing a good user experience. This includes minimizing load times, optimizing images, and using efficient coding practices...'
  },

  // Page 6
  {
    title: 'AI in Healthcare',
    author: 'Jane Doe',
    date: '2023-10-01',
    category: 'AI',
    tags: ['AI', 'Healthcare', 'Technology', 'Innovation'],
    content: 'AI is revolutionizing healthcare by enabling faster, more accurate diagnoses and personalized treatments. Understanding the applications and implications of AI in healthcare is essential for the future of medicine...'
  },
  {
    title: 'Fostering Collaboration in Remote Teams',
    author: 'John Smith',
    date: '2023-10-05',
    category: 'Jobs',
    tags: ['Collaboration', 'Remote Work', 'Team Building', 'Productivity'],
    content: 'Fostering collaboration in remote teams involves creating a culture of openness and support, using collaborative tools, and encouraging regular check-ins and team-building activities...'
  },
  {
    title: 'The Rise of Progressive Web Apps',
    author: 'Alice Johnson',
    date: '2023-10-10',
    category: 'Web Development',
    tags: ['Progressive Web Apps', 'Web Development', 'Technology', 'Innovation'],
    content: 'Progressive Web Apps (PWAs) combine the best features of web and mobile apps, providing a fast, reliable, and engaging user experience. Understanding how to build and deploy PWAs is becoming increasingly important for web developers...'
  },
  {
    title: 'Managing Remote Teams Effectively',
    author: 'Bob Brown',
    date: '2023-10-15',
    category: 'Jobs',
    tags: ['Remote Work', 'Management', 'Leadership', 'Productivity'],
    content: 'Managing remote teams effectively requires clear communication, setting expectations, and providing the necessary support and resources. This ensures that team members stay productive and engaged...'
  },
  {
    title: 'Creating Inclusive Web Designs',
    author: 'Carol Green',
    date: '2023-10-20',
    category: 'Web Development',
    tags: ['Inclusive Design', 'Accessibility', 'Web Development', 'User Experience'],
    content: 'Creating inclusive web designs involves ensuring that websites are accessible to all users, including those with disabilities. This requires understanding and implementing accessibility standards and best practices...'
  }
];

export default blogPosts;
