import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-gray-900 mb-6 leading-tight">
            Увеличиваем продажи
            <span className="text-primary"> на 40-70%</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Создаем эффективные отделы продаж с нуля, оптимизируем существующие
            процессы и внедряем современные CRM-системы для роста вашего бизнеса
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на консультацию
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть кейсы
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-600">Успешных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <div className="text-gray-600">Средний рост продаж</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">7</div>
              <div className="text-gray-600">Лет экспертизы</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
