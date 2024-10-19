import { Laptop, Smartphone, Cloud } from "lucide-react"

export default function BusinessCategories() {
  const features = [
    {
      icon: "search.mov",
      title: "Search for foundational papers",
      description: "Quickly discover seminal papers in your field, seamlessly integrated with Semantic Scholar to provide you with a variety of literature searching options.",
    },
    {
      icon: "hexle2.mp4",
      title: "Use integrated tools while reading articles",
      description: "Dot down questions, annotations and notes using our built-in editor, enhancing your quality of research and creating meaningful analysis of research articles",
    },
  ]

  const featureImages = [
    {
      icon: "images/cite.png",
      title: "Smart assistant and citations",
      description: "Leverage fast AI insights that answer your questions and breaks down complex sections, along with seamless citation management to streamline your research process.",
    },
    {
      icon: "images/save.png",
      title: "Build your research library",
      description: "Save articles for later and organize them into a personalized library, creating a curated collection of research at your fingertips.",
    }
  ]

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12"
      data-aos="zoom-y-out"
      data-aos-delay={150}>Transform the way you research</h2>
      <div className="space-y-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            <div className="w-full md:w-1/2 flex justify-center items-center py-8 md:py-0">
              <video src={feature.icon} className="h-64 text-primary rounded-2xl shadow-2xl" autoPlay muted loop playsInline/>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0 text-center md:text-left px-4">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
        {featureImages.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            <div className="w-full md:w-1/2 flex justify-center items-center py-8 md:py-0">
              <img src={feature.icon} className="h-64 text-primary"/>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0 text-center md:text-left px-4">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}