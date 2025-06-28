class Place {
  constructor(title, imageUri, address, location) {
    this.id = new Date().toISOString() + Math.random().toString();
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
  }
}
