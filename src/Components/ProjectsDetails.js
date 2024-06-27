export default function ProjectDetails({ project, onBack }) {
    return (
      <div className="relative p-6">
        <button 
          onClick={onBack}
          className="absolute top-0 right-0 mt-2 mr-2 px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
        >
          [Back]
        </button>
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="text-lg mb-4">{project.date}</p>
        <p className="mb-4">{project.description}</p>
        {/* Add more project details as needed */}
      </div>
    );
  };