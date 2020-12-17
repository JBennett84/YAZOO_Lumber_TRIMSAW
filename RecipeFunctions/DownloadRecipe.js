// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    /**
     * 
     * @param {TcHmi.Context} ctx
     * @param {string} recipeReference
     */
    var DownloadRecipe = function (ctx, recipeReference) {
        if (!recipeReference) {
            // Stop (not abort) with null (binding without a value) or empty string
            ctx.success();

            return;    // We are running async so the return value is not used
        }
        // Create a dummy HTMLAnchorElement
        var downloaderAElement = document.createElement('a');
       
        // Force downloading the provide a nice download name 
        downloaderAElement.download = recipeReference.replace(/::/g, '_') + '.json';
        // Create correct link for export function of the server
        downloaderAElement.href = '/Export/TcHmiRecipeManagement?Filter=recipeList::' + recipeReference;
        // Hide dummy element to prevent visual impact
        downloaderAElement.style.display = 'none';
        // Append dummy element, so even Firefox allows a simulated click.
        document.body.appendChild(downloaderAElement);
        // Simulate a click. Works probably only if this action is triggered by a user interaction (not on load or symbol change)
        downloaderAElement.click();
        // Remove dummy element
        document.body.removeChild(downloaderAElement);
        
        // Inform the system that we are done
        ctx.success();
        
        return;    // We are running async so the return value is not used
    };

    TcHmi.Functions.registerFunction('DownloadRecipe', DownloadRecipe);
})(TcHmi);