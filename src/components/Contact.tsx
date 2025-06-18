import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Получить консультацию
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Обсудим ваши задачи и предложим решение в течение 24 часов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat">
                Отправить заявку
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Ваше имя"
                  className="border-blue-200 focus:border-primary"
                />
                <Input
                  placeholder="Телефон"
                  className="border-blue-200 focus:border-primary"
                />
              </div>
              <Input
                placeholder="Email"
                className="border-blue-200 focus:border-primary"
              />
              <Input
                placeholder="Название компании"
                className="border-blue-200 focus:border-primary"
              />
              <Textarea
                placeholder="Расскажите о ваших задачах и целях"
                className="min-h-32 border-blue-200 focus:border-primary"
              />

              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <Icon name="Info" className="text-primary mt-1" size={20} />
                <div className="text-sm text-gray-700">
                  <p className="font-medium mb-1">Что вы получите:</p>
                  <ul className="space-y-1">
                    <li>• Анализ текущей ситуации</li>
                    <li>• Рекомендации по улучшению</li>
                    <li>• План внедрения решений</li>
                    <li>• Расчет ROI от оптимизации</li>
                  </ul>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@salesprofi.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Офис</h3>
                    <p className="text-gray-600">Москва, ул. Тверская, 15с1</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white">
              <CardContent className="p-6 text-center">
                <Icon name="Clock" className="mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">Режим работы</h3>
                <p className="text-blue-100">Пн-Пт: 9:00 — 19:00</p>
                <p className="text-blue-100">Сб-Вс: по договоренности</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
