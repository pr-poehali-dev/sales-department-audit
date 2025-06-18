import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const cases = [
  {
    company: "ТехноЛогистика",
    industry: "Логистика и транспорт",
    challenge: "Низкая конверсия лидов (8%), неструктурированные продажи",
    solution: "Внедрили CRM, обучили команду, настроили воронку продаж",
    results: {
      conversion: "+320%",
      revenue: "+65%",
      period: "6 месяцев",
    },
    metrics: [
      { label: "Конверсия лидов", before: "8%", after: "34%" },
      { label: "Средний чек", before: "450k ₽", after: "720k ₽" },
      { label: "Цикл сделки", before: "45 дней", after: "28 дней" },
    ],
  },
  {
    company: "МедТехИнвест",
    industry: "Медицинское оборудование",
    challenge: "Отсутствие системного подхода к B2B продажам",
    solution: "Создали отдел продаж с нуля, внедрили методологию",
    results: {
      conversion: "+480%",
      revenue: "+120%",
      period: "8 месяцев",
    },
    metrics: [
      { label: "Количество сделок", before: "5/месяц", after: "29/месяц" },
      { label: "Средний чек", before: "2.1M ₽", after: "2.8M ₽" },
      { label: "Команда продаж", before: "1 человек", after: "6 человек" },
    ],
  },
  {
    company: "СтройИнновации",
    industry: "Строительные материалы",
    challenge: "Высокая текучка менеджеров, низкая мотивация команды",
    solution: "Пересмотрели систему мотивации, провели обучение",
    results: {
      conversion: "+85%",
      revenue: "+42%",
      period: "4 месяца",
    },
    metrics: [
      { label: "Текучка кадров", before: "60%", after: "15%" },
      { label: "Выполнение плана", before: "67%", after: "124%" },
      { label: "NPS команды", before: "3.2", after: "8.7" },
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Кейсы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Реальные результаты компаний, которые доверили нам развитие своих
            продаж
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((caseItem, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="bg-blue-50/50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-2xl font-montserrat text-gray-900 mb-2">
                      {caseItem.company}
                    </CardTitle>
                    <p className="text-primary font-medium">
                      {caseItem.industry}
                    </p>
                  </div>
                  <div className="flex gap-4 mt-4 md:mt-0">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {caseItem.results.conversion}
                      </div>
                      <div className="text-sm text-gray-600">конверсия</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {caseItem.results.revenue}
                      </div>
                      <div className="text-sm text-gray-600">выручка</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {caseItem.results.period}
                      </div>
                      <div className="text-sm text-gray-600">период</div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Icon
                        name="AlertCircle"
                        className="text-red-500 mr-2"
                        size={20}
                      />
                      Проблема
                    </h4>
                    <p className="text-gray-600 mb-6">{caseItem.challenge}</p>

                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Icon
                        name="Lightbulb"
                        className="text-primary mr-2"
                        size={20}
                      />
                      Решение
                    </h4>
                    <p className="text-gray-600">{caseItem.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Icon
                        name="BarChart3"
                        className="text-green-600 mr-2"
                        size={20}
                      />
                      Ключевые метрики
                    </h4>
                    <div className="space-y-4">
                      {caseItem.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-gray-700 font-medium">
                            {metric.label}
                          </span>
                          <div className="flex items-center space-x-2">
                            <span className="text-red-500 line-through">
                              {metric.before}
                            </span>
                            <Icon
                              name="ArrowRight"
                              className="text-gray-400"
                              size={16}
                            />
                            <span className="text-green-600 font-semibold">
                              {metric.after}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
