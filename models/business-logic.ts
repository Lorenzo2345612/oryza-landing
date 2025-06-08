import * as LucideIcons from "lucide-react"

export class IconService {
  static getIcon(iconName: string) {
    const IconComponent = (LucideIcons as any)[iconName]
    return IconComponent || LucideIcons.Code
  }
}

export class ValidationService {
  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  static validateRequired(value: string): boolean {
    return value.trim().length > 0
  }

  static validateMinLength(value: string, minLength: number): boolean {
    return value.trim().length >= minLength
  }
}

export class NavigationService {
  static scrollToSection(href: string): void {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
}

export class CarouselService {
  static getNextIndex(currentIndex: number, totalItems: number): number {
    return (currentIndex + 1) % totalItems
  }

  static getPrevIndex(currentIndex: number, totalItems: number): number {
    return (currentIndex - 1 + totalItems) % totalItems
  }
}
