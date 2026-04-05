'use client';

import { motion } from 'framer-motion';
import { Calendar, Download } from 'lucide-react';
import { useState } from 'react';

interface AddToCalendarProps {
  title: string;
  description: string;
  location: string;
  startDate: string; // ISO format
  endDate: string; // ISO format
}

export function AddToCalendar({
  title,
  description,
  location,
  startDate,
  endDate,
}: AddToCalendarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const formatDateForGoogle = (date: string) => {
    return new Date(date).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const formatDateForICS = (date: string) => {
    return new Date(date).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const generateGoogleCalendarUrl = () => {
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: title,
      details: description,
      location: location,
      dates: `${formatDateForGoogle(startDate)}/${formatDateForGoogle(endDate)}`,
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  const generateOutlookUrl = () => {
    const params = new URLSearchParams({
      subject: title,
      body: description,
      location: location,
      startdt: startDate,
      enddt: endDate,
      path: '/calendar/action/compose',
      rru: 'addevent',
    });
    return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
  };

  const generateICSFile = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//ICRA 2026//Satellite School//EN',
      'BEGIN:VEVENT',
      `DTSTART:${formatDateForICS(startDate)}`,
      `DTEND:${formatDateForICS(endDate)}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'icra-2026-satellite-school.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const calendarOptions = [
    {
      name: 'Google Calendar',
      action: () => window.open(generateGoogleCalendarUrl(), '_blank'),
      icon: '📅',
    },
    {
      name: 'Outlook',
      action: () => window.open(generateOutlookUrl(), '_blank'),
      icon: '📧',
    },
    {
      name: 'Apple Calendar',
      action: generateICSFile,
      icon: '🍎',
    },
    {
      name: 'Download ICS',
      action: generateICSFile,
      icon: '💾',
    },
  ];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm font-medium text-gray-900 dark:text-white border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-cyan-500/10 transition"
        aria-label="Add to calendar"
        aria-expanded={isOpen}
      >
        <Calendar className="w-4 h-4" />
        <span>Add to Calendar</span>
      </motion.button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 right-0 z-50 glass rounded-lg border border-gray-200 dark:border-white/10 shadow-xl min-w-[200px] overflow-hidden"
          >
            {calendarOptions.map((option, index) => (
              <motion.button
                key={option.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  option.action();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition"
              >
                <span className="text-lg">{option.icon}</span>
                <span>{option.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}
