/**
 * Created by Marine on 10.05.17.
 */
(function () {
    "use strict";
    Object.defineProperties(Array.prototype, {
        find: {
            value: function (functor) {
                var i = 0;

                for (; i < this.length; ++i) {
                    if (functor.call(this, this[i], i)) {
                        return this[i];
                    }
                }

                return null;
            }
        },

        indexOf: {
            value: function (searchElement, fromIndex, isFinder) {
                var that = this,
                    index = -1;

                if (("boolean" === typeof (fromIndex)) && (isFinder = fromIndex, true) || ((fromIndex < 0) && ((fromIndex += that.length) < 0))) {
                    fromIndex = 0;
                }

                if (isFinder && "function" === typeof (searchElement)) {
                    this.slice(fromIndex).some(function (item, i) {
                        return searchElement.call(that, item, i += fromIndex) && (index = i, true);
                    });

                    return index;
                } else {
                    return indexOf.call(this, searchElement, fromIndex);
                }
            }
        },

        at: {
            value: function (index) {
                if (index >= 0) {
                    return this[index];
                } else {
                    return this[this.length + index];
                }
            }
        },

        last: {
            get: function () { return this.at(-1); }
        }
    });
}());