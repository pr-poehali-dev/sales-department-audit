import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="TrendingUp" className="text-primary" size={32} />
          <span className="text-2xl font-montserrat font-bold text-gray-900">
            SalesProfi
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Услуги
          </a>
          <a
            href="#team"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Команда
          </a>
          <a
            href="#portfolio"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Кейсы
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Контакты
          </a>
        </nav>

        <Button className="bg-primary hover:bg-primary/90 text-white">
          Получить консультацию
        </Button>
      </div>
    </header>
  );
};

export default Header;
