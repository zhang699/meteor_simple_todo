import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

import './task.html';

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    /*Tasks.update(this._id, {
      $set: { checked: !this.checked },
    });*/
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    /*Tasks.remove(this._id);*/
    Meteor.call('tasks.remove', this._id);
  },
});