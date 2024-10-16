import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Laptop, Smartphone, Cloud, Lock, Zap, HeadphonesIcon } from "lucide-react"

const features = [
  {
    title: "Search for seminal papers",
    description: "Quickly discover seminal papers in your field, seamlessly integrated with Semantic Scholar to provide you with the most impactful research at your fingertips.",
    icon: Laptop,
    color: "bg-blue-500",
  },
  {
    title: "Integrated editor as you read",
    description: "Dot down questions, annotations and notes using our built-in editor, enhancing your quality of research and creating meaningful analysis of research articles",
    icon: Smartphone,
    color: "bg-green-500",
  },
  {
    title: "Smart assistant and citations",
    description: "Leverage fast AI insights that answer your questions and breaks down complex sections, along with seamless citation management to streamline your research process.",
    icon: Cloud,
    color: "bg-purple-500",
  },
]

export default function BusinessCategories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                {/* <Badge variant="secondary" className="mb-4">
                  Featured
                </Badge> */}
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
