"use client";

import Image from "next/image";
import Link from "next/link";
import { INSTAGRAM_URL } from "@/lib/constants";
import { Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-secondary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Image
              src="/img/logo.jpeg"
              alt="Crunch Cookies RJ"
              width={80}
              height={80}
              className="w-16 h-16 object-contain rounded-full"
            />
            <p className="text-secondary/70 text-sm">
              Cookies artesanais premium feitos com paixão no Rio de Janeiro.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-secondary mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#produtos"
                  className="text-secondary/70 hover:text-primary transition-colors text-sm"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="#galeria"
                  className="text-secondary/70 hover:text-primary transition-colors text-sm"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  href="#diferenciais"
                  className="text-secondary/70 hover:text-primary transition-colors text-sm"
                >
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link
                  href="#depoimentos"
                  className="text-secondary/70 hover:text-primary transition-colors text-sm"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-secondary/70 hover:text-primary transition-colors text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-secondary mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-secondary/70">
              <li>Rio de Janeiro, RJ</li>
              <li>
                <a
                  href="https://wa.me/5521999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary/10 pt-8 text-center">
          <p className="text-secondary/50 text-sm">
            © {currentYear} Crunch Cookies RJ. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
