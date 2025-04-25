"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  LogOut,
  ChevronDown,
  History,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="border-b">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-bold text-xl">REDIBO</Link>

        {/* Botón menú hamburguesa móvil */}
        <button className="md:hidden p-2" onClick={() => setOpenMenu(!openMenu)}>
          <Menu size={24} />
        </button>

        {/* Menú Desktop */}
        <nav className="hidden md:flex justify-center items-center gap-6">
          <Link href="/" className="text-sm font-medium">Inicio</Link>
          <Link href="/" className="text-sm font-medium text-gray-400 pointer-events-none opacity-50">Productos</Link>
          <Link href="/" className="text-sm font-medium text-gray-400 pointer-events-none opacity-50">Acerca De</Link>
          <Link href="/" className="text-sm font-medium text-gray-400 pointer-events-none opacity-50">Contacto</Link>
        </nav>

        {/* Dropdown de usuario en Desktop */}
        {isLoggedIn && (
          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>DV</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Diana Vargas</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/historia3">
                    <Star className="mr-2 h-4 w-4" />
                    <span>Calificar Renters</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/historia4">
                    <History className="mr-2 h-4 w-4" />
                    <span>Actividad de Automóvil</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsLoggedIn(false)} className="text-gray-400 pointer-events-none opacity-50">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>

      {/* Menú móvil debajo del header */}
      {openMenu && (
        <nav className="flex flex-col items-center bg-white p-4 md:hidden gap-2">
          <Link href="/" className="text-sm font-medium">Inicio</Link>
          <Link href="/" className="text-sm font-medium text-gray-400 pointer-events-none opacity-50">Productos</Link>
          <Link href="/" className="text-sm font-medium text-gray-400 pointer-events-none opacity-50">Acerca De</Link>
          <Link href="/" className="text-sm font-medium text-gray-400 pointer-events-none opacity-50">Contacto</Link>

          {/* Dropdown del usuario (versión móvil) */}
          {isLoggedIn && (
            <div className="mt-4 w-full">
              <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>DV</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">Diana Vargas</span>
                    </div>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem asChild>
                    <Link href="/historia3">
                      <Star className="mr-2 h-4 w-4" />
                      <span>Calificar Renters</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/historia4">
                      <History className="mr-2 h-4 w-4" />
                      <span>Actividad de Automóvil</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)} className="text-gray-400 pointer-events-none opacity-50">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </nav>
      )}
    </header>
  );
}
