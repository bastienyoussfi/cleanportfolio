const PostsData = [
    { 
        id:1, 
        title: "Neural Networks Foundations", 
        link: "https://south-crowley-f39.notion.site/Neural-Networks-Foundations-411e2a54c3f34898b97c97b50ee8fdd9?pvs=4",
        date: "Jun.2024", 
        badges: ["Python", "Machine Learning", "Neural Networks"],
        summary: "Let us try to come back to the foundations of a neural network. Simply, a neural network is a mathematical function with parameters that is trying to fit a lot of data.", 
        content: "Let us try to come back to the foundations of a neural network. Simply, a neural network is a mathematical function with parameters that is trying to fit a lot of data. \n Then, the idea is that if we know the gradient of our loss function, then we know in what direction we should move the parameters to have a better result. If, say, the parameter **a** has a negative gradient, then we know that increasing **a** will decrease our loss function. \n As our goal is to get our loss function as low as possible, then we know that's what we need to do.\n So, we find the gradient of our loss function for each of our parameters, and then adjust our parameters a bit in the **opposite** direction to the sign of the gradient." 
    },
    { 
        id:2, 
        title: "Natural Language Processing", 
        link: "https://south-crowley-f39.notion.site/Natural-Language-Processing-2c62781192754c0a81281d53921f454e?pvs=4",
        date: "Jun.2024", 
        badges: ["Python", "Machine Learning", "NLP"],
        summary: "Let us try to come back to the foundations of a neural network. Simply, a neural network is a mathematical function with parameters that is trying to fit a lot of data.", 
        content: "One area where deep learning has dramatically improved in the last couple of years is natural language processing (NLP). Computers can now generate text, translate automatically from one language to another, analyze comments, label words in sentences, and much more. \n Perhaps the most widely practically useful application of NLP is **classification** -- that is, classifying a document automatically into some category.\n This process is usually splitted in different phases, **data pre-processing** and **tokenization**, **dividing** our data into different sets (training, validation and test) and actually **training** our model." 
    },
    { 
        id:3, 
        title: "Neural net from scratch", 
        link: "https://south-crowley-f39.notion.site/Linear-model-and-neural-net-from-scratch-0c8c7077b8a4453b956831c6a42dd4eb?pvs=4",
        date: "Jun.2024", 
        badges: ["Python", "Machine Learning", "Neural Networks"],
        summary: "Let us try to come back to the foundations of a neural network. Simply, a neural network is a mathematical function with parameters that is trying to fit a lot of data.", 
        content: "In order to understand AI and Machine Learning correctly, it is important to understand the roots and how neural networks actually work. \n In this post, we will try to build a neural network from scratch, using only Python some libraries. \n We will start by building a simple linear model, and then we will add layers to it to make it a neural network. \n We will also implement the backpropagation algorithm, which is the algorithm that allows us to train our neural network. \n Finally, we will train our neural network on a simple dataset and see how it performs, and the results are quite surprising!" 
    },
    { 
        id:4, 
        title: "Collaborative Filtering", 
        link: "https://south-crowley-f39.notion.site/Collaborative-Filtering-2ad59748fd3a4711ae4964ee7933327c?pvs=4",
        date: "Jun.2024", 
        badges: ["Python", "Machine Learning", "Collaborative Filtering"],
        summary: "Let us try to come back to the foundations of a neural network. Simply, a neural network is a mathematical function with parameters that is trying to fit a lot of data.", 
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\n Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.\n Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    },
    { 
        id:5, 
        title: "Blog Web Application", 
        link: "https://south-crowley-f39.notion.site/Blog-Web-Application-18220d95b50b4d6cb6b8f93daae77ad8?pvs=4",
        badges: ["Web Development", "React", "Node.js"],
        date: "Jun.2024", 
        summary: "Let us try",
        content: "This post is an explanation on how I built a blog web application to train my skills. This app required a lot of different skills so it was a good exercise to train on front-end, back-end, database and more. \n I used React for the front-end, Node.js for the back-end and MongoDB for the database. \n I also used a lot of different libraries and tools to make the app more user-friendly and more efficient. \n I also had to learn a lot of new things to build this app, so it was a great experience. \n I am very happy with the result and I hope you will like it too!"
    },
    {
        id:6, 
        title: "Web Application Setup", 
        link: "https://south-crowley-f39.notion.site/Web-Application-Setup-8293f5b6ba8a4e01bf99b35960dab2c3?pvs=4",
        badges: ["Web Development", "React", "Node.js"],
        date: "Jun.2024", 
        summary: "Let us try",
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\n Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.\n Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    },
];

export default PostsData;