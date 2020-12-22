// Return content type based on file name
// Mimes can be get from kc-mime-list module
function fctype(file, mimes) {
    mimes = mimes || {};
    var ext =
    file.split('.').pop().toLowerCase();
    var ct = mimes[ext] || 'text/plain';
    return ct;
}
