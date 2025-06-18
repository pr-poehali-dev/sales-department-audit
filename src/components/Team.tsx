import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Алексей Морозов",
    role: "Руководитель направления",
    experience: "12 лет в продажах",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    achievements: [
      "Увеличил продажи в 15 компаниях на 50%+",
      "Эксперт по B2B продажам",
      'Автор методики "Воронка роста"',
    ],
  },
  {
    name: "Мария Виноградова",
    role: "CRM-консультант",
    experience: "8 лет внедрения систем",
    photo:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    achievements: [
      "Внедрила CRM в 80+ компаниях",
      "Сертифицированный партнер Битрикс24",
      "Специалист по автоматизации",
    ],
  },
  {
    name: "Дмитрий Козлов",
    role: "Бизнес-тренер",
    experience: "10 лет обучения продажам",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    achievements: [
      "Обучил 500+ менеджеров",
      "Разработчик авторских программ",
      "Эксперт по психологии продаж",
    ],
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Наша команда
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Эксперты с многолетним опытом, которые знают, как создать
            эффективный отдел продаж
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.experience}
                </p>

                <ul className="space-y-2 text-sm text-gray-700">
                  {member.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
