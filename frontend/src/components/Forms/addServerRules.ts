import { isValidServerUrl } from '#/stores/server';
import { useTranslation } from 'i18next-vue';

export function useAddServerRules() {
  const { t } = useTranslation();
  return [
    (v: string): boolean | string => !!v.trim() || t('required'),
    (v: string): boolean | string => isValidServerUrl(v) || t('invalidUrl')
  ];
}
