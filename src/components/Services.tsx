import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: "Users",
    title: "Создание отдела продаж",
    description:
      "Построение эффективной структуры продаж с нуля, подбор персонала и настройка процессов",
    features: [
      "Анализ рынка",
      "Подбор сотрудников",
      "Настройка процессов",
      "KPI и мотивация",
    ],
  },
  {
    icon: "Search",
    title: "Аудит продаж",
    description:
      "Комплексный анализ текущих процессов продаж и выявление точек роста",
    features: [
      "Анализ воронки",
      "Оценка команды",
      "Аудит скриптов",
      "План улучшений",
    ],
  },
  {
    icon: "Database",
    title: "Внедрение CRM",
    description:
      "Выбор, настройка и внедрение CRM-системы под специфику вашего бизнеса",
    features: [
      "Выбор системы",
      "Настройка под задачи",
      "Интеграции",
      "Обучение команды",
    ],
  },
  {
    icon: "GraduationCap",
    title: "Обучение продажам",
    description:
      "Тренинги и индивидуальное развитие менеджеров для повышения эффективности",
    features: [
      "Техники продаж",
      "Работа с возражениями",
      "Переговоры",
      "Психология клиента",
    ],
  },
  {
    icon: "BarChart3",
    title: "Аналитика и отчеты",
    description:
      "Настройка системы метрик и автоматических отчетов для контроля результатов",
    features: ["Настройка метрик", "Дашборды", "Автоотчеты", "Прогнозирование"],
  },
  {
    icon: "Target",
    title: "Оптимизация воронки",
    description: "Анализ и улучшение конверсий на каждом этапе воронки продаж",
    features: [
      "Анализ конверсий",
      "A/B тестирование",
      "Улучшение скриптов",
      "Автоматизация",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексные решения для развития вашего отдела продаж — от аудита до
            полного внедрения
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
