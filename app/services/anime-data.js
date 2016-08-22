import Ember from 'ember';

export default Ember.Service.extend({
  items: null,
  pageStatus: {
    currentPage: false,
    prevPage: false,
    nextPage: false
  },
  findAll: function() {
    let self = this;

    if (self.get('items') === null) {
      return self.loadData().then(function(json) {
        self.set('items', json.data);

        return self.get('items');
      });
    } else {
      return this.get('items');
    }
  },
  findPage: function(page_number) {
    let self = this;
    let result;
    const limit = 5;
    const start = (page_number * limit) - limit;
    const end = page_number * limit;

    function setPageStatus(data) {
      let totalData = data.length;
      let totalPage = 0;
      let currentPage = parseInt(page_number);

      if (totalData % limit === 0) {
        totalPage = totalData / limit;
      } else {
        totalPage = Math.floor(totalData / limit) + 1;
      }

      if (currentPage - 1 <= 0) {
        self.set('pageStatus.prevPage', false);
      } else {
        self.set('pageStatus.prevPage',currentPage - 1);
      }

      if (currentPage + 1 > totalPage) {
        self.set('pageStatus.nextPage', false);
      } else {
        self.set('pageStatus.nextPage', currentPage + 1);
      }
    }

    if (self.get('items') === null) {
      return self.loadData().then(function(json) {
        let data = json.data;
        self.set('items', data);
        setPageStatus(data);
        result = {
          items: self.get('items').slice(start, end),
          pageStatus: self.pageStatus
        };

        return result;
      });
    } else {
      setPageStatus(self.get('items'));
      result = {
        items: self.get('items').slice(start, end),
        pageStatus: self.pageStatus
      };

      return result;
    }
  },
  findRecord: function(anime) {
    let self = this;
    let result;

    if (self.get('items') === null) {
      return self.loadData().then(function(json) {
        self.set('items', json.data);

        result = self.get('items').find(function(data) {
          return data.download === anime;
        });

        return result;
      });
    } else {
      result = self.get('items').find(function(data) {
        return data.download === anime;
      });

      return result;
    }
  },
  loadData: function() {
    return Ember.$.getJSON('https://raw.githubusercontent.com/animerumah/link/master/index.json');
  }
});
