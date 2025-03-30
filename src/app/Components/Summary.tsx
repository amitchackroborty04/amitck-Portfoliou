import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeSummary() {
  // Dummy education data
  const educationData = [
    {
      degree: "Master in Computer Engineering",
      institution: "Harvard University",
      years: "2015 - 2017",
      skills:
        "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
    },
    {
      degree: "Master in Computer Engineering",
      institution: "Harvard University",
      years: "2015 - 2017",
      skills:
        "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
    },
    {
      degree: "Master in Computer Engineering",
      institution: "Harvard University",
      years: "2015 - 2017",
      skills:
        "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
    },
  ];

  // Dummy experience data
  const experienceData = [
    {
      position: "Sr. Font End Developer",
      company: "Apple Inc",
      years: "2020 - Current",
      skills:
        "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
    },
    {
      position: "Jr. Font End Developer",
      company: "Dribbble Inc",
      years: "2018 - 2022",
      skills:
        "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
    },
    {
      position: "HTML Developer",
      company: "Adobe Inc",
      years: "2017 - 2018",
      skills:
        "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
    },
  ];

  return (
      <section className="bg-gradient-to-r from-[#04016C]/80 to-[#4A16BD]/80 dark:from-[#1A1A29] dark:to-[#1A1A29]">
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 ">
              <h1 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-16 text-white">
                  A summary of My Resume
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Education Section */}
                  <div>
                      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white">
                          My Education
                      </h2>
                      <div className="space-y-8">
                          {educationData.map((item, index) => (
                              <div key={index} className="border-b pb-6">
                                  <h3 className="text-lg font-medium text-white">{item.degree}</h3>
                                  <p className="text-muted-foreground mb-2 text-white">
                                      {item.institution} / {item.years}
                                  </p>
                                  <p className="text-sm text-muted-foreground text-white">{item.skills}</p>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Experience Section */}
                  <div>
                      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white">
                          My Experience
                      </h2>
                      <div className="space-y-8">
                          {experienceData.map((item, index) => (
                              <div key={index} className="border-b pb-6">
                                  <h3 className="text-lg font-medium text-white">{item.position}</h3>
                                  <p className="text-muted-foreground mb-2 text-white">
                                      {item.company} / {item.years}
                                  </p>
                                  <p className="text-sm text-muted-foreground text-white">{item.skills}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>

              {/* Download CV Button */}
              <div className="flex justify-center mt-10">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                  </Button>
              </div>
          </div>
  </section>
  );
}
