export function Sticker(configuration) {
 // target.prototype.stickers = ['Github','Google','Kaizer'];
 return function(target) {
  target.prototype.stickers = configuration.stickers;
 }
}
