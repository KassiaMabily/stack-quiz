'use client';

import { Icon } from '@/components/ui/icon';
import { useTheme } from '@/contexts/ThemeContext';
import { classNames } from '@/lib/utils';
import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(theme == 'dark');

  const handleThemeChange = (enabled: boolean) => {
    setTheme(enabled ? 'dark' : 'light');
    setEnabled(enabled);
  };

  useEffect(() => {
    setEnabled(theme == 'dark');
  }, [theme]);

  return (
    <div className="inline-flex items-center space-x-4">
      <Icon name={'sun-light'} className="hidden dark:block" />
      <Icon name={'sun-dark'} className="block dark:hidden" />
      <Switch
        checked={enabled}
        onChange={handleThemeChange}
        className={classNames(
          'bg-primary relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent items-center transition-colors duration-200 ease-in-out'
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
      <Icon name={'moon-light'} className="hidden dark:block" />
      <Icon name={'moon-dark'} className="block dark:hidden" />
    </div>
  );
}
