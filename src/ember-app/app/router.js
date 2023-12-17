import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proekt3-отчёт-об-оценке-l');
  this.route('i-i-s-proekt3-отчёт-об-оценке-e',
  { path: 'i-i-s-proekt3-отчёт-об-оценке-e/:id' });
  this.route('i-i-s-proekt3-отчёт-об-оценке-e.new',
  { path: 'i-i-s-proekt3-отчёт-об-оценке-e/new' });
  this.route('i-i-s-proekt3-оценка-l');
  this.route('i-i-s-proekt3-оценка-e',
  { path: 'i-i-s-proekt3-оценка-e/:id' });
  this.route('i-i-s-proekt3-оценка-e.new',
  { path: 'i-i-s-proekt3-оценка-e/new' });
  this.route('i-i-s-proekt3-сотрудники-l');
  this.route('i-i-s-proekt3-сотрудники-e',
  { path: 'i-i-s-proekt3-сотрудники-e/:id' });
  this.route('i-i-s-proekt3-сотрудники-e.new',
  { path: 'i-i-s-proekt3-сотрудники-e/new' });
  this.route('i-i-s-proekt3-увольнение-l');
  this.route('i-i-s-proekt3-увольнение-e',
  { path: 'i-i-s-proekt3-увольнение-e/:id' });
  this.route('i-i-s-proekt3-увольнение-e.new',
  { path: 'i-i-s-proekt3-увольнение-e/new' });
});

export default Router;
