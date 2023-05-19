import ExpoModulesCore
import UIKit

// This view will be used as a native component. Make sure to inherit from `ExpoView`
// to apply the proper styling (e.g. border radius and shadows).
class ExpoScreenCaptureIosView: ExpoView {
    
    required init(appContext: AppContext? = nil) {
        super.init(appContext: appContext)
    }
    
    override func didMoveToSuperview() {
        makeSecure()
    }
}

private extension UIView {
    func makeSecure() {
        guard superview != nil else {
            //to avoid layer cyclic crash, when it is a topmost view
            for subview in subviews {
                subview.makeSecure()
            }
            return
        }
        let field = UITextField()
        field.isSecureTextEntry = true
        field.isUserInteractionEnabled = false
        self.addSubview(field)
        self.layer.superlayer?.addSublayer(field.layer)
        field.layer.sublayers?.first?.addSublayer(self.layer)
        field.centerYAnchor.constraint(equalTo: self.centerYAnchor).isActive = true
        field.centerXAnchor.constraint(equalTo: self.centerXAnchor).isActive = true
        
    }
}
