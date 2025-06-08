"use client";

import { useState, useEffect, useCallback } from "react";
import { NavigationService } from "@/models/business-logic";
import type { NavigationItem } from "@/models/types";
import { testimonios } from "@/models/data";

export const useNavigationController = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems: NavigationItem[] = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#portafolio", label: "Portafolio" },
    { href: "#contacto", label: "Contacto" },
  ];

  if (testimonios.length > 0) {
    menuItems.push({ href: "#testimonios", label: "Testimonios" });
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((href: string) => {
    NavigationService.scrollToSection(href);
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return {
    isMenuOpen,
    isScrolled,
    menuItems,
    scrollToSection,
    toggleMenu,
  };
};
