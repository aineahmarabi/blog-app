'use client'
import Image from 'next/image'

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="mb-16">
                <h1 className="text-4xl font-bold text-purple-950 mb-4">About The Author</h1>
                <div className="w-24 h-1 bg-purple-700"></div>
            </div>

            {/* Author Section */}
            <div className="grid md:grid-cols-5 gap-12 items-center mb-16">
                {/* Image takes up 2 columns */}
                <div className="md:col-span-2 relative h-[500px] bg-purple-100 rounded-lg overflow-hidden">
                    <Image
                        src="/Ime.jpg"
                        alt="Author"
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>

                {/* Text content takes up 3 columns */}
                <div className="md:col-span-3 space-y-6">
                    <h2 className="text-3xl font-semibold text-purple-950">
                        Mining Engineer & Storyteller
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg text-justify">
                        Welcome to Jewel in the Mines! I&apos;m a passionate mining engineer, saved by grace, 
                        and ready to conquer the depths of the mining industry.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg text-justify">
                        When I&apos;m not working or embarking on new adventures, you&apos;ll find me lost in 
                        the pages of a good novel. There&apos;s something magical about immersing myself 
                        in stories that adds an extra sparkle to life.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg text-justify">
                        As a gemstone enthusiast, I have a special connection to citrine—my birthstone. 
                        I&apos;m fascinated by how each gemstone carries its own unique beauty, much like 
                        the stories we all hold within us.
                    </p>
                </div>
            </div>

            {/* Interests Section */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-purple-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-semibold text-purple-950 mb-3">Mining</h3>
                    <p className="text-gray-700 text-lg">Exploring the depths of the earth and uncovering its hidden treasures.</p>
                </div>
                <div className="bg-purple-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-semibold text-purple-950 mb-3">Literature</h3>
                    <p className="text-gray-700 text-lg">Finding magic and inspiration between the pages of captivating stories.</p>
                </div>
                <div className="bg-purple-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-semibold text-purple-950 mb-3">Gemstones</h3>
                    <p className="text-gray-700 text-lg">Appreciating the unique beauty and character of natural gemstones.</p>
                </div>
            </div>

            {/* Closing Section */}
            <div className="mt-16 max-w-3xl mx-auto">
                <p className="text-gray-700 leading-relaxed text-lg text-justify italic">
                    Writing is her escape, her way of capturing thoughts, experiences, and all the wonders 
                    she discovers along the way. So, welcome to her little corner of the web—where the worlds 
                    of nature, gemstones, her faith, and life intersect.
                </p>
            </div>
        </div>
    )
}