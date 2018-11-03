import $ from 'jquery';

$.ajaxSetup({cache: false});

export const ajaxCall = (settings, successFn = null, failureFn = null) => {
  return $.ajax(Object.assign({
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    contentType: 'application/json',
    dataType: 'json',
  }, settings))
  .done((data) => {
    if (successFn && typeof successFn === "function") {
      successFn(data);
    }
  })
  .fail((xhr) => {
    const json = xhr.responseJSON || {};

    if (failureFn && typeof failureFn === "function") {
      failureFn(json);
    }
  });
};