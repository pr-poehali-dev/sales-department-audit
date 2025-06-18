import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: "Search",
    title: "Аудит отдела продаж",
    description:
      "Комплексный анализ существующих процессов продаж, выявление узких мест и разработка плана оптимизации",
    features: [
      "Анализ воронки продаж",
      "Оценка эффективности команды",
      "Аудит CRM и инструментов",
      "Детальный отчет с рекомендациями",
    ],
  },
  {
    icon: "Users",
    title: "Создание отдела продаж",
    description:
      "Построение эффективной структуры отдела продаж с нуля: от стратегии до найма персонала",
    features: [
      "Разработка стратегии продаж",
      "Создание структуры отдела",
      "Подбор и обучение команды",
      "Настройка процессов и KPI",
    ],
  },
  {
    icon: "Settings",
    title: "Оптимизация процессов",
    description:
      "Модернизация существующих процессов продаж для повышения конверсии и скорости закрытия сделок",
    features: [
      "Оптимизация воронки продаж",
      "Автоматизация рутинных задач",
      "Улучшение скриптов продаж",
      "Внедрение лучших практик",
    ],
  },
  {
    icon: "Database",
    title: "Внедрение CRM",
    description:
      "Выбор, настройка и внедрение CRM-системы, идеально подходящей для вашего бизнеса",
    features: [
      "Анализ и выбор CRM",
      "Настройка под бизнес-процессы",
      "Миграция существующих данных",
      "Обучение команды работе",
    ],
  },
  {
    icon: "GraduationCap",
    title: "Обучение и развитие",
    description:
      "Профессиональное обучение команды продаж современным техникам и методам продаж",
    features: [
      "Тренинги по продажам",
      "Работа с возражениями",
      "Техники переговоров",
      "Развитие soft skills",
    ],
  },
  {
    icon: "BarChart3",
    title: "Аналитика и контроль",
    description:
      "Настройка системы метрик, KPI и отчетности для постоянного контроля результатов",
    features: [
      "Разработка системы KPI",
      "Настройка дашбордов",
      "Автоматические отчеты",
      "Мониторинг эффективности",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Услуги по развитию продаж
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            От комплексного аудита до создания отдела продаж с нуля — полный
            цикл услуг для роста вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-blue-100"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name={service.icon as any}
                    className="text-primary"
                    size={24}
                  />
                </div>
                <CardTitle className="text-xl font-montserrat">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Icon
                        name="Check"
                        className="text-primary mr-2"
                        size={16}
                      />
                      {feature}
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

export default Services;
