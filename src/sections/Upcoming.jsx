const upcomingProjects = [
];

const Upcoming = () => {
    return (
        <section className="py-20 px-4 sm:px-6 bg-black/30">
            <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-3xl font-bold mb-8">
                    🚧 Upcoming <span className="text-blue-500">Projects</span>
                </h2>

                <div className="space-y-4">
                    {upcomingProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 border border-gray-800 p-4 rounded-xl"
                        >
                            {project}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Upcoming;