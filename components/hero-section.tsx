"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/animated-text";
import { FloatingElements } from "@/components/floating-elements";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Github,
  Linkedin,
  User,
} from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <FloatingElements />

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Animated Profile Image */}
        <div className="relative mb-12 flex justify-center">
          <div className="relative group">
            <div className="w-40 h-40 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <User className="w-20 h-20 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Animated Text */}
        <div className="space-y-4 mb-8">
          <AnimatedText
            text="Praveen Kumar"
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
            delay={0.5}
          />
          <AnimatedText
            text="IT Professional & System Engineer"
            className="text-lg md:text-2xl lg:text-3xl text-slate-300 font-medium"
            delay={2}
          />
          <AnimatedText
            text="Transforming IT infrastructure with 2.5+ years of expertise"
            className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
            delay={4}
          />
        </div>

        {/* Contact Info with Animation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-8 text-slate-300">
          {[
            { icon: Mail, text: "praveen03561@gmail.com", delay: 6 },
            { icon: Phone, text: "+91 8318693067", delay: 6.3 },
            { icon: MapPin, text: "Delhi, India", delay: 6.6 },
          ].map(({ icon: Icon, text, delay }, index) => (
            <div
              key={index}
              className="flex items-center gap-3 opacity-0 animate-fade-in-up group hover:text-blue-400 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-slate-800/30"
              style={{
                animationDelay: `${delay}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300 flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-medium text-sm md:text-base">{text}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 opacity-0 animate-fade-in-up text-base font-medium"
            style={{ animationDelay: "7s", animationFillMode: "forwards" }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 border-slate-600 text-slate-300 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 opacity-0 animate-fade-in-up bg-transparent"
              style={{ animationDelay: "7.3s", animationFillMode: "forwards" }}
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 border-slate-600 text-slate-300 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 opacity-0 animate-fade-in-up bg-transparent"
              style={{ animationDelay: "7.6s", animationFillMode: "forwards" }}
            >
              <Linkedin className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute  left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "8s", animationFillMode: "forwards" }}
        >
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
