import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProekt3ОтчётОбОценкеLForm from './forms/i-i-s-proekt3-отчёт-об-оценке-l';
import IISProekt3ОценкаLForm from './forms/i-i-s-proekt3-оценка-l';
import IISProekt3СотрудникиLForm from './forms/i-i-s-proekt3-сотрудники-l';
import IISProekt3УвольнениеLForm from './forms/i-i-s-proekt3-увольнение-l';
import IISProekt3ОтчётОбОценкеEForm from './forms/i-i-s-proekt3-отчёт-об-оценке-e';
import IISProekt3ОценкаEForm from './forms/i-i-s-proekt3-оценка-e';
import IISProekt3СотрудникиEForm from './forms/i-i-s-proekt3-сотрудники-e';
import IISProekt3УвольнениеEForm from './forms/i-i-s-proekt3-увольнение-e';
import IISProekt3ОтчётОбОценкеModel from './models/i-i-s-proekt3-отчёт-об-оценке';
import IISProekt3ОценкаПодробноModel from './models/i-i-s-proekt3-оценка-подробно';
import IISProekt3ОценкаModel from './models/i-i-s-proekt3-оценка';
import IISProekt3СотрудникиModel from './models/i-i-s-proekt3-сотрудники';
import IISProekt3УвольнениеModel from './models/i-i-s-proekt3-увольнение';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proekt3-отчёт-об-оценке': IISProekt3ОтчётОбОценкеModel,
    'i-i-s-proekt3-оценка-подробно': IISProekt3ОценкаПодробноModel,
    'i-i-s-proekt3-оценка': IISProekt3ОценкаModel,
    'i-i-s-proekt3-сотрудники': IISProekt3СотрудникиModel,
    'i-i-s-proekt3-увольнение': IISProekt3УвольнениеModel
  },

  'application-name': 'Proekt3',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proekt3',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt3',
          title: 'Proekt3'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        оценка: {
          caption: 'Оценка',
          title: 'Оценка',
          'i-i-s-proekt3-отчёт-об-оценке-l': {
            caption: 'Отчёт об оценке',
            title: ''
          },
          'i-i-s-proekt3-оценка-l': {
            caption: 'Оценка',
            title: ''
          }
        },
        увольнение: {
          caption: 'Увольнение',
          title: 'Увольнение',
          'i-i-s-proekt3-увольнение-l': {
            caption: 'Увольнение',
            title: ''
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-proekt3-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proekt3-отчёт-об-оценке-l': IISProekt3ОтчётОбОценкеLForm,
    'i-i-s-proekt3-оценка-l': IISProekt3ОценкаLForm,
    'i-i-s-proekt3-сотрудники-l': IISProekt3СотрудникиLForm,
    'i-i-s-proekt3-увольнение-l': IISProekt3УвольнениеLForm,
    'i-i-s-proekt3-отчёт-об-оценке-e': IISProekt3ОтчётОбОценкеEForm,
    'i-i-s-proekt3-оценка-e': IISProekt3ОценкаEForm,
    'i-i-s-proekt3-сотрудники-e': IISProekt3СотрудникиEForm,
    'i-i-s-proekt3-увольнение-e': IISProekt3УвольнениеEForm
  },

});

export default translations;
