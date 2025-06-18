import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="TrendingUp" className="text-primary" size={28} />
              <span className="text-xl font-montserrat font-bold text-white">
                SalesProfi
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Эксперты по созданию и развитию отделов продаж. Увеличиваем
              выручку компаний на 40-70%.
            </p>
            <div className="flex space-x-4">
              <Icon name="Phone" size={20} />
              <span>+7 (495) 123-45-67</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Создание отдела продаж</li>
              <li>Аудит продаж</li>
              <li>Внедрение CRM</li>
              <li>Обучение команды</li>
              <li>Аналитика</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Компания</h3>
            <ul className="space-y-2 text-gray-400">
              <li>О нас</li>
              <li>Команда</li>
              <li>Кейсы</li>
              <li>Отзывы</li>
              <li>Блог</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <div>Москва, ул. Тверская, 15с1</div>
              <div>info@salesprofi.ru</div>
              <div>Пн-Пт: 9:00 — 19:00</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2024 SalesProfi. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
