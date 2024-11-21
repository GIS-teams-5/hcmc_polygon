// author: Tieu Vo Hong Han
function createThreePublicPoint(Point, Graphic) {
  const publicPoints = [
    {
      name: "Vietnam Bankers Association",
      longitude: 106.70423786749457,
      latitude: 10.769599186091465,
      address:
        "8 Đ. Võ Văn Kiệt, Phường Nguyễn Thái Bình, Quận 1, Hồ Chí Minh 70000, Vietnam",
      phoneNumber: "02838213957",
    },
    {
      name: "Military Hospital 175",
      longitude: 106.68005742701499,
      latitude: 10.819904122762964,
      address: "786 Đ. Nguyễn Kiệm, Phường 3, Gò Vấp, Hồ Chí Minh, Vietnam",
      phoneNumber: "19001175",
    },
    {
      name: "Ho Chi Minh City Post Office",
      longitude: 106.6999905540011,
      latitude: 10.779943623910858,
      address: "125 Hai Bà Trưng, Bến Nghé, Quận 1, Hồ Chí Minh, Vietnam",
      phoneNumber: "02839247247",
    },
  ];
  console.log(publicPoints);
  const graphicList = [];
  publicPoints.forEach((publicPoint) => {
    const point = new Point({
      longitude: publicPoint.longitude,
      latitude: publicPoint.latitude,
    });
    // const symbol = {
    //   type: "text", // autocasts as new TextSymbol()
    //   color: "white",
    //   haloColor: "blue",
    //   haloSize: 1,
    //   text: publicPoint.name,
    //   yoffset: 20,
    //   xoffset: 30,
    //   font: {
    //     size: 15,
    //   },
    //   width: 1,
    // };

    var symbol = {
      type: "picture-marker", // autocasts as new PictureMarkerSymbol()
      url: "https://static.arcgis.com/images/Symbols/Shapes/Bank.png",
      width: "64px",
      height: "64px",
    };

    // create attributes
    const attributes = {
      Name: publicPoint.name,
      Location: publicPoint.address,
      PhoneNumber: publicPoint.phoneNumber,
    };
    // Create popup template
    const popupTemplate = {
      title: publicPoint.name,
      content:
        "<b>Name</b> located at <b>{Location}</b>. <br> Phone Number: <b>{PhoneNumber}</b>",
    };

    const pointGraphic = new Graphic({
      geometry: point,
      symbol: symbol,
      attributes: attributes,
      popupTemplate: popupTemplate,
    });
    graphicList.push(pointGraphic);
  });
  return graphicList;
}
