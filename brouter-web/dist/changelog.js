BR.changelog = `
<h2 id="0181-2022-06-29">0.18.1 (2022-06-29)</h2>
<h3 id="bugfixes">Bugfixes</h3>
<ul>
<li>Fix error on load for old browser versions (SyntaxError: expected expression, got keyword &#39;import&#39;) - by <a href="https://github.com/nrenner">@nrenner</a> (<a href="https://github.com/nrenner/brouter-web/issues/571">#571</a>)</li>
<li>Fix download click for Firefox &lt; 75 (attach to DOM) - by <a href="https://github.com/nrenner">@nrenner</a> (<a href="https://github.com/nrenner/brouter-web/commit/4a31ebe112df004fc4207d00278c8b3dad27f52f">4a31ebe</a>)</li>
</ul>
<h3 id="local-installation--development">Local installation / development</h3>
<ul>
<li>add support for vector sources specified by <code>url</code> - by <a href="https://github.com/mjaschen">@mjaschen</a> (<a href="https://github.com/nrenner/brouter-web/pull/566">#566</a>)</li>
<li>enable reloading when contents of <code>layers</code> are changed (in serve mode) - by <a href="https://github.com/mjaschen">@mjaschen</a> (<a href="https://github.com/nrenner/brouter-web/pull/567">#567</a>)</li>
</ul>
<h2 id="0180-2022-06-24">0.18.0 (2022-06-24)</h2>
<h3 id="bugfixes-1">Bugfixes</h3>
<ul>
<li>Layer &quot;Mapillary&quot; is currently not populated with coverage - by <a href="https://github.com/nrenner">@nrenner</a> (<a href="https://github.com/nrenner/brouter-web/issues/432">#432</a>)</li>
<li>Hillshading and Hike&amp;Bike layers show tile &quot;Contact [[User:TheDJ]] ...&quot; - by <a href="https://github.com/nrenner">@nrenner</a> (<a href="https://github.com/nrenner/brouter-web/issues/475">#475</a>)</li>
<li>Route drawing stops working by random - by <a href="https://github.com/nrenner">@nrenner</a> (<a href="https://github.com/nrenner/brouter-web/issues/561">#561</a>)</li>
</ul>
<h3 id="local-installation--development-1">Local installation / development</h3>
<ul>
<li>access token required for Mapillary layer in <code>keys.js</code> (merge from <code>keys.template.js</code>)</li>
<li>vector-tile support - by <a href="https://github.com/nrenner">@nrenner</a> (<a href="https://github.com/nrenner/brouter-web/issues/289">#289</a>)<ul>
<li>see documentation <a href="https://github.com/nrenner/brouter-web/blob/master/CONTRIBUTING.md#vector-tiles--dem">in CONTRIBUTING.md</a></li>
</ul>
</li>
</ul>
<h2 id="0170-2022-06-08">0.17.0 (2022-06-08)</h2>
<h3 id="new-features">New Features</h3>
<ul>
<li>Allow straight lines - by <a href="https://github.com/nrenner">@nrenner</a> (<a href="https://github.com/nrenner/brouter-web/issues/68">#68</a>)<ul>
<li>Draw a direct line between two route points (&quot;as the crow flies&quot;) when there are no roads:<ul>
<li>Append straight lines by activating the toggle button (<code>B</code> key) that appears when drawing is active or by holding <code>Shift</code> key while clicking</li>
<li>Change an existing route segment beween two markers to a straight line (and back) by clicking/tapping on it (or rather the edit handle)</li>
</ul>
</li>
<li>Mobile behaviour will change a bit:<ul>
<li>increased touch tolerance, so it&#39;s easier to hit the route line for dragging and tapping</li>
<li>for adding a via point, you previously needed to tap on the route first to make the edit handle appear then drag that. Now you can drag the route right away</li>
<li>previously a tap on the route made the height graph map marker appear, now a tap switches the segment into a straight line, the height marker can still be shown after a long press</li>
</ul>
</li>
</ul>
</li>
<li>Add OpenStreetMap Notes Layer - by <a href="https://github.com/mjaschen">@mjaschen</a> (<a href="https://github.com/nrenner/brouter-web/pull/458">#458</a>)</li>
</ul>
<h3 id="improvements">Improvements</h3>
<ul>
<li>Improve keyboard handling and dialog UIs - by <a href="https://github.com/rkflx">@rkflx</a> (<a href="https://github.com/nrenner/brouter-web/pull/395">#395</a>)</li>
<li>Use marker for locations layers and add icons - by <a href="https://github.com/stesie">@stesie</a> (<a href="https://github.com/nrenner/brouter-web/pull/397">#397</a>)</li>
<li>Complete icons of locations layers and add to layer tree - by <a href="https://github.com/nrenner">@nrenner</a> (<a href="https://github.com/nrenner/brouter-web/pull/398">#398</a>)</li>
<li>Client-side track formatting - by <a href="https://github.com/nrenner">@nrenner</a> (<a href="https://github.com/nrenner/brouter-web/pull/399">#399</a>)</li>
<li>Handle nogo areas file upload error - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/413">#413</a>)</li>
<li>Add tooltip with POI name to POI icons - by <a href="https://github.com/mjaschen">@mjaschen</a> (<a href="https://github.com/nrenner/brouter-web/pull/414">#414</a>, <a href="https://github.com/nrenner/brouter-web/pull/415">#415</a>)</li>
<li>Add SwissTopo tile layers - by <a href="https://github.com/phylor">@phylor</a> (<a href="https://github.com/nrenner/brouter-web/pull/422">#422</a>)</li>
<li>Add <code>supermarket</code> to locations layers - by <a href="https://github.com/mjaschen">@mjaschen</a> (<a href="https://github.com/nrenner/brouter-web/pull/412">#412</a>)</li>
<li>Add <code>amenity=shelter</code> to locations layers - by <a href="https://github.com/mjaschen">@mjaschen</a> (<a href="https://github.com/nrenner/brouter-web/pull/433">#433</a>)</li>
<li>Favorite list for search (geocode control) - by <a href="https://github.com/printpagestopdf">@printpagestopdf</a> (<a href="https://github.com/nrenner/brouter-web/issues/451">#451</a>)</li>
<li>remember and recall last used (non-custom) profile - by <a href="https://github.com/mjaschen">@mjaschen</a> (<a href="https://github.com/nrenner/brouter-web/pull/456">#456</a>)</li>
<li>Toggle &quot;locate&quot; state with keyboard shortcut - by <a href="https://github.com/mjaschen">@mjaschen</a> (<a href="https://github.com/nrenner/brouter-web/pull/462">#462</a>)</li>
<li>Support <code>surface</code> and <code>smoothness</code> variants like <code>cycleway:surface</code> in analysis - by <a href="https://github.com/mjaschen">@mjaschen</a> (<a href="https://github.com/nrenner/brouter-web/pull/460">#460</a>)</li>
</ul>
<h3 id="bugfixes-2">Bugfixes</h3>
<ul>
<li>Fix loading no-go areas - by <a href="https://github.com/rkflx">@rkflx</a> (<a href="https://github.com/nrenner/brouter-web/pull/395">#395</a>)</li>
<li>Error when exporting route with empty POI name - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/427">#427</a>)</li>
</ul>
<h3 id="local-installation--development-2">Local installation / development</h3>
<ul>
<li>config.js<ul>
<li>rename <code>hiking-beta.brf</code> -&gt; <code>hiking-mountain.brf</code></li>
</ul>
</li>
</ul>
<h2 id="0160-2021-03-30">0.16.0 (2021-03-30)</h2>
<h3 id="new-features-1">New Features</h3>
<ul>
<li>Locations (POIs) layers powered by Overpass API available in optional layers (under &quot;More&quot;) and as custom query in &quot;Custom layers&quot; - by <a href="https://github.com/stesie">@stesie</a> (<a href="https://github.com/nrenner/brouter-web/issues/106">#106</a>, <a href="https://github.com/nrenner/brouter-web/pull/384">#384</a>)</li>
<li>Message informs about new versions since last visit, &quot;What&#39;s new?&quot; button in &quot;About&quot; - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/372">#372</a>)</li>
</ul>
<h3 id="improvements-1">Improvements</h3>
<ul>
<li>Confirm &quot;Delete Route&quot; with Enter key (after opening &quot;Clear&quot; dialog with Backspace key) - by <a href="https://github.com/mjaschen">@mjaschen</a> (<a href="https://github.com/nrenner/brouter-web/issues/385">#385</a>)</li>
<li>Improve mobile responsivity (full screen dialogs and more) - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/296">#296</a>)</li>
<li>Gray out unselectable layers below minimum zoom - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/381">#381</a>)</li>
<li>Add message if no elevation data is available - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/365">#365</a>)</li>
<li>Size limit for loading a track increased to 10 MiB (<a href="https://github.com/nrenner/brouter-web/commit/dd34064e8c09f1bc6b11e2e14e1bb83d41a61ed9">dd34064</a>)</li>
<li>Update France Go area to 10km - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/commit/1c135879746f670b1a854fcbe55ab5dabacfa0a9">1c13587</a>)</li>
</ul>
<h3 id="bugfixes-3">Bugfixes</h3>
<ul>
<li>Flickering search field on Firefox @ Android - by <a href="https://github.com/mjaschen">@mjaschen</a> (<a href="https://github.com/nrenner/brouter-web/issues/393">#393</a>)</li>
<li>Custom layers table width and type translations added - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/379">#379</a>)</li>
</ul>
<h3 id="local-installation--development-3">Local installation / development</h3>
<ul>
<li>New config entries <code>overpassBaseUrl</code> and <code>trackSizeLimit</code> (<a href="https://github.com/nrenner/brouter-web/blob/a2717ac10298f5e9689b420a0af0eb310eababd3/config.template.js#L131-L134">config.template.js</a>)</li>
</ul>
<h2 id="0151-2021-01-25">0.15.1 (2021-01-25)</h2>
<h3 id="improvements-de-fr">Improvements [de, fr]</h3>
<ul>
<li>Popup for allowed zone marker with delete button and GPX &amp; GeoJSON download links</li>
</ul>
<h3 id="bugfixes-4">Bugfixes</h3>
<ul>
<li>Apply allowed zone country rules on click instead of using browser language (<a href="https://github.com/nrenner/brouter-web/issues/360">#360</a>)</li>
</ul>
<h2 id="0150-2021-01-15">0.15.0 (2021-01-15)</h2>
<h3 id="new-features-2">New Features</h3>
<ul>
<li>Switch elevation diagram plugin to Heightgraph (colors by incline) - by <a href="https://github.com/alexcojocaru">@alexcojocaru</a> (<a href="https://github.com/nrenner/brouter-web/pull/345">#345</a>)</li>
</ul>
<h3 id="new-features-de">New Features [de]</h3>
<ul>
<li>[German users only] New button to determine 15km allowed zone (<a href="https://github.com/nrenner/brouter-web/issues/358">#358</a>), <a href="https://github.com/mjaschen">@mjaschen</a>: (<a href="https://github.com/nrenner/brouter-web/pull/357">#357</a>)</li>
</ul>
<p>See also <a href="https://github.com/nrenner/brouter-web/milestone/15?closed=1">milestone 0.15.0</a></p>
<h2 id="0140-2020-12-04">0.14.0 (2020-12-04)</h2>
<h3 id="new-features-fr">New Features [fr]</h3>
<ul>
<li>[French users only] New button to add 20km allowed zone - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/347">#347</a>, <a href="https://github.com/nrenner/brouter-web/pull/350">#350</a>, <a href="https://github.com/nrenner/brouter-web/pull/352">#352</a>)</li>
</ul>
<h2 id="0130-2020-08-04">0.13.0 (2020-08-04)</h2>
<p>See also <a href="https://github.com/nrenner/brouter-web/milestone/14?closed=1">milestone 0.13.0</a></p>
<h3 id="new-features-3">New Features</h3>
<ul>
<li>Load Track from file and add as Route - by <a href="https://github.com/printpagestopdf">@printpagestopdf</a> (<a href="https://github.com/nrenner/brouter-web/pull/312">#312</a>, <a href="https://github.com/nrenner/brouter-web/issues/318">#318</a>)</li>
</ul>
<h3 id="improvements-2">Improvements</h3>
<ul>
<li>Add more keyboard shortcuts and fix various shortcut related issues - by <a href="https://github.com/rkflx">@rkflx</a> (<a href="https://github.com/nrenner/brouter-web/pull/314">#314</a>, <a href="https://github.com/nrenner/brouter-web/issues/315">#315</a>)</li>
</ul>
<h3 id="bugfixes-5">Bugfixes</h3>
<ul>
<li>Empty elevation chart on load, but button to hide not visible (<a href="https://github.com/nrenner/brouter-web/issues/320">#320</a>)</li>
</ul>
<h3 id="layers">Layers</h3>
<ul>
<li>Add CyclOSM back for all, with kind permission from OpenStreetMap France (<a href="https://github.com/nrenner/brouter-web/pull/290">#290</a>)</li>
</ul>
<h2 id="0120-2020-06-19">0.12.0 (2020-06-19)</h2>
<p>See also <a href="https://github.com/nrenner/brouter-web/milestone/13?closed=1">milestone 0.12.0</a></p>
<h3 id="new-features-4">New Features</h3>
<ul>
<li>Add sidebar tab with route analysis data - by <a href="https://github.com/mjaschen">@mjaschen</a> (<a href="https://github.com/nrenner/brouter-web/pull/304">#304</a>, <a href="https://github.com/nrenner/brouter-web/issues/45#issuecomment-633255152">#45</a>)</li>
<li>Allow to mute route display by holding down the &quot;m&quot; key - by <a href="https://github.com/stesie">@stesie</a> (<a href="https://github.com/nrenner/brouter-web/pull/303">#303</a>)</li>
</ul>
<h3 id="improvements-3">Improvements</h3>
<ul>
<li>Improve mobile stats layout - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/298">#298</a>)</li>
<li>Polish color coding + analysis tab visuals - by <a href="https://github.com/rkflx">@rkflx</a> (<a href="https://github.com/nrenner/brouter-web/pull/313">#313</a>)</li>
</ul>
<h3 id="bugfixes-6">Bugfixes</h3>
<ul>
<li>Brouter-Web on mobile: adjust route in between two waypoints (<a href="https://github.com/nrenner/brouter-web/issues/285">#285</a>)</li>
<li>NogoAreas control doesn&#39;t work on mobile Chrome (<a href="https://github.com/nrenner/brouter-web/issues/259">#259</a>)</li>
<li>Fix: Profile params of type &#39;select&#39; ignored default value from profile - by <a href="https://github.com/tbsmark86">@tbsmark86</a> (<a href="https://github.com/nrenner/brouter-web/pull/292">#292</a>)</li>
</ul>
<h3 id="local-installation--development-4">Local installation / development</h3>
<ul>
<li>Add config option for initial map position and zoom level - by <a href="https://github.com/rmsacks">@rmsacks</a> (<a href="https://github.com/nrenner/brouter-web/pull/281">#281</a>)</li>
<li>Privacy link relative path - by <a href="https://github.com/erdmark">@erdmark</a> (<a href="https://github.com/nrenner/brouter-web/pull/284">#284</a>)</li>
<li>Add CONTRIBUTING.md - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/305">#305</a>)</li>
<li>add VS Code settings, launch and extension recommendations - by <a href="https://github.com/schmic">@schmic</a> (<a href="https://github.com/nrenner/brouter-web/pull/307">#307</a>)</li>
<li>add docker-compose tasks for development - by <a href="https://github.com/schmic">@schmic</a> (<a href="https://github.com/nrenner/brouter-web/pull/308">#308</a>)</li>
</ul>
<h2 id="0111-2020-02-20">0.11.1 (2020-02-20)</h2>
<h3 id="improvements-4">Improvements</h3>
<ul>
<li>Show icon indicator when profile is pinned (modified in editor) (<a href="https://github.com/nrenner/brouter-web/pull/277">#277</a>)</li>
</ul>
<h3 id="bugfixes-7">Bugfixes</h3>
<ul>
<li>Fix overwriting editor changes when switching profile tabs (<a href="https://github.com/nrenner/brouter-web/pull/277">#277</a>)</li>
<li>Fix search result not selectable in Chrome (<a href="https://github.com/perliedman/leaflet-control-geocoder/issues/255">leaflet-control-geocoder#272</a>)</li>
</ul>
<h2 id="0110-2020-01-21">0.11.0 (2020-01-21)</h2>
<p>See also <a href="https://github.com/nrenner/brouter-web/milestone/12?closed=1">milestone 0.11.0</a></p>
<h3 id="new-features-5">New Features</h3>
<ul>
<li>Load track in GPX, KML or GeoJSON format - by <a href="https://github.com/matzepan">@matzepan</a> (<a href="https://github.com/nrenner/brouter-web/issues/30">#30</a>)</li>
<li>Profile options UI (user interface) to customize profile variables - by <a href="https://github.com/Phyks">@Phyks</a> (<a href="https://github.com/nrenner/brouter-web/issues/223">#223</a>)</li>
<li>Add user POI (point of interest) markers with name, exported as waypoints - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/222">#222</a>)</li>
<li>Color route segments by incline, altitude or cost - by <a href="https://github.com/matzepan">@matzepan</a> (<a href="https://github.com/nrenner/brouter-web/pull/242">#242</a>)</li>
<li>Distance markers - by <a href="https://github.com/matzepan">@matzepan</a> (<a href="https://github.com/nrenner/brouter-web/issues/169">#169</a>)</li>
<li>Option to include route waypoints in export - by <a href="https://github.com/Phyks">@Phyks</a> (<a href="https://github.com/nrenner/brouter-web/pull/221">#221</a>)</li>
<li>Transparency slider for overlay map layers - by <a href="https://github.com/Phyks">@Phyks</a> (<a href="https://github.com/nrenner/brouter-web/issues/213">#213</a>)</li>
</ul>
<h3 id="improvements-5">Improvements</h3>
<ul>
<li>Distinct from, to and via markers - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/129">#129</a>)</li>
<li>Always show travel time and energy statistics - by <a href="https://github.com/rkflx">@rkflx</a> (<a href="https://github.com/nrenner/brouter-web/pull/216">#216</a>)</li>
<li>Synchronize data table highlight and selection with map - by <a href="https://github.com/matzepan">@matzepan</a> (<a href="https://github.com/nrenner/brouter-web/issues/171">#171</a>)</li>
<li>Option to delete all nogo areas - by <a href="https://github.com/Phyks">@Phyks</a> (<a href="https://github.com/nrenner/brouter-web/issues/217">#217</a>)</li>
<li>Hints and feedback for optional layers tree usage (<a href="https://github.com/nrenner/brouter-web/issues/211">#211</a>)</li>
</ul>
<h2 id="0103-2019-06-27">0.10.3 (2019-06-27)</h2>
<p>See also <a href="https://github.com/nrenner/brouter-web/milestone/11?closed=1">milestone 0.10.3</a></p>
<h3 id="bugfixes-8">Bugfixes</h3>
<ul>
<li>Warn when special characters in export name will get removed (<a href="https://github.com/nrenner/brouter-web/issues/194">#194</a>, <a href="https://github.com/nrenner/brouter-web/issues/202">#202</a>)</li>
<li>Fix %-encoded export file name in Microsoft Edge (<a href="https://github.com/nrenner/brouter-web/issues/201">#201</a>)</li>
<li>Fix error when no elevation data above 60° north, causing empty stats and disabled export, by implementing own missing data handling for elevation diagram (<a href="https://github.com/nrenner/brouter-web/issues/203">#203</a>)</li>
</ul>
<h3 id="improvements-6">Improvements</h3>
<ul>
<li>Reduce tile.openstreetmap.org usage (<a href="https://github.com/nrenner/brouter-web/issues/205">#205</a>)<ul>
<li>use a worldwide monolingual layer (de, fr, ru) as default when matching the browser language</li>
<li>remember the last selected layers (like map view), so it doesn&#39;t load the default layer next time</li>
<li>default zoom level 5 instead of 6, which seems to be cached longer</li>
</ul>
</li>
<li>Upgrade Gulp (build tool) to version 4.0.2 - by <a href="https://github.com/Phyks">@Phyks</a> (<a href="https://github.com/nrenner/brouter-web/pull/209">#209</a>)</li>
<li>Upgrade leaflet geocoder to properly parse lat/lng - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/134">#134</a>)</li>
<li>Upgrade to latest Bootstrap (front-end framework) - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/186">#186</a>)</li>
</ul>
<h2 id="0102-2019-06-02">0.10.2 (2019-06-02)</h2>
<p>See also <a href="https://github.com/nrenner/brouter-web/milestone/10?closed=1">milestone 0.10.2</a></p>
<h3 id="new-features-6">New Features</h3>
<ul>
<li>Polish formatting and behaviour of track statistics bar - by <a href="https://github.com/rkflx">@rkflx</a> (<a href="https://github.com/nrenner/brouter-web/pull/200">#200</a>)</li>
</ul>
<h3 id="bugfixes-9">Bugfixes</h3>
<ul>
<li>Fix unintentional shortcut activations when typing text - by <a href="https://github.com/rkflx">@rkflx</a> (<a href="https://github.com/nrenner/brouter-web/pull/198">#198</a>)</li>
<li>Fix export button translation - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/195">#195</a>)</li>
<li>Fix downloads in Microsoft Edge - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/193">#193</a>)</li>
</ul>
<h2 id="0101-2019-05-22">0.10.1 (2019-05-22)</h2>
<h3 id="bugfixes-10">Bugfixes</h3>
<ul>
<li>Really ignore missing elevation points in elevation chart - by <a href="https://github.com/bagage">@bagage</a>/<a href="https://github.com/nrenner">@nrenner</a> (<a href="https://github.com/nrenner/brouter-web/issues/147">#147</a>)</li>
</ul>
<h2 id="0100-2019-05-21">0.10.0 (2019-05-21)</h2>
<p>See also <a href="https://github.com/nrenner/brouter-web/milestone/9?closed=1">milestone 0.10.0</a></p>
<h3 id="new-features-7">New Features</h3>
<ul>
<li>Export dialog with input field for file name and track title (replaces Download dropdown) - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/96">#96</a>)</li>
</ul>
<h3 id="bugfixes-11">Bugfixes</h3>
<ul>
<li>Fix broken nogo&#39;s - by <a href="https://github.com/bagage">@bagage</a>/<a href="https://github.com/nrenner">@nrenner</a> (<a href="https://github.com/nrenner/brouter-web/issues/183">#183</a>)</li>
</ul>
<h2 id="090-2019-05-18">0.9.0 (2019-05-18)</h2>
<p>See also <a href="https://github.com/nrenner/brouter-web/milestone/8?closed=1">milestone 0.9.0</a></p>
<h3 id="new-features-8">New Features</h3>
<ul>
<li>Add delete last point button - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/33">#33</a>)</li>
<li>Add reverse route button - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/54">#54</a>)</li>
</ul>
<h3 id="improvements-7">Improvements</h3>
<ul>
<li>Improve about dialog texts - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/176">#176</a>)</li>
<li>Replace | with ; in URL - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/109">#109</a>)</li>
</ul>
<h3 id="bugfixes-12">Bugfixes</h3>
<ul>
<li>Ignore missing elevation points in elevation chart - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/147">#147</a>)</li>
<li>Fix loading nogos with weight - by <a href="https://github.com/Phyks">@Phyks</a> (<a href="https://github.com/nrenner/brouter-web/issues/174">#174</a>)</li>
<li>Fix wrong version under tag (<a href="https://github.com/nrenner/brouter-web/issues/140">#140</a>)</li>
</ul>
<h2 id="080-2019-05-04">0.8.0 (2019-05-04)</h2>
<p>See also <a href="https://github.com/nrenner/brouter-web/milestone/6?closed=1">milestone 0.8.0</a></p>
<h3 id="new-features-9">New Features</h3>
<ul>
<li>Optional layers tree (<a href="https://github.com/nrenner/brouter-web/issues/146">#146</a>)</li>
<li>Let user upload GeoJSON file of nogos - by <a href="https://github.com/Phyks">@Phyks</a> (<a href="https://github.com/nrenner/brouter-web/pull/161">#161</a>)</li>
<li>Translations: make website localizable (i18n) - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/63">#63</a>)</li>
<li>Fix polygon edition - by <a href="https://github.com/Phyks">@Phyks</a> (<a href="https://github.com/nrenner/brouter-web/pull/158">#158</a>)</li>
<li>Render polygons from URL hash and pass it to BRouter server - by <a href="https://github.com/Phyks">@Phyks</a> (<a href="https://github.com/nrenner/brouter-web/pull/157">#157</a>)</li>
<li>Start support of nogos polylines/polygons - by <a href="https://github.com/Phyks">@Phyks</a> (<a href="https://github.com/nrenner/brouter-web/pull/148">#148</a>)</li>
</ul>
<h3 id="improvements-8">Improvements</h3>
<ul>
<li>Show line numbers in profile editor to help locating error message line (<a href="https://github.com/nrenner/brouter-web/commit/81f2c0863f2569fa9079e5c96f4c9b09ef4c26e2">81f2c08</a>)</li>
<li>Hide StravaSegments control when layer is not active (<a href="https://github.com/nrenner/brouter-web/commit/eaba5a08217fd026fb7f83ec7beb7c1f1fdc2d69">eaba5a0</a>)</li>
<li>Show strava error + update translations - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/163">#163</a>)</li>
<li>Replace Bower with Yarn/npm - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/116">#116</a>)</li>
<li>Add strava layer in overlays - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/152">#152</a>)</li>
<li>Fix release script - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/150">#150</a>)</li>
</ul>
<h3 id="bugfixes-13">Bugfixes</h3>
<ul>
<li>Overlays hidden under custom layer (<a href="https://github.com/nrenner/brouter-web/issues/143">#143</a>)</li>
</ul>
<h2 id="070-2018-10-10">0.7.0 (2018-10-10)</h2>
<p>See also <a href="https://github.com/nrenner/brouter-web/milestone/4?closed=1">milestone 0.7.0</a></p>
<h3 id="new-features-10">New Features</h3>
<ul>
<li>Redesign of the user interface to also support mobile devices - by <a href="https://github.com/bagage">@bagage</a> and <a href="https://github.com/RoPP">@RoPP</a> (<a href="https://github.com/nrenner/brouter-web/issues/34">#34</a>, <a href="https://github.com/nrenner/brouter-web/issues/66">#66</a>)</li>
<li>Permalink replaced with auto-updating URL address bar - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/62">#62</a>)</li>
<li>Allow user to add custom layers - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/77">#77</a>)</li>
<li>Profile and data table now in a collapsible, full-height sidebar (<a href="https://github.com/nrenner/brouter-web/issues/90">#90</a>, <a href="https://github.com/nrenner/brouter-web/issues/114">#114</a>)</li>
<li>No-go areas individually editable and deletable (<a href="https://github.com/nrenner/brouter-web/issues/100">#100</a>)</li>
</ul>
<h3 id="improvements-9">Improvements</h3>
<ul>
<li>New gulp debug task and watch CSS folder - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/58">#58</a>)</li>
<li>Locate button not shown when no https (<a href="https://github.com/nrenner/brouter-web/issues/60">#60</a>)</li>
<li>Support Leaflet 1.0 (<a href="https://github.com/nrenner/brouter-web/issues/65">#65</a>, <a href="https://github.com/nrenner/brouter-web/issues/69">#69</a>)</li>
<li>Add a gulp command for release - by <a href="https://github.com/RoPP">@RoPP</a> (<a href="https://github.com/nrenner/brouter-web/pull/85">#85</a>)</li>
<li>Use https scheme whenever possible, to avoid mixed content issues - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/87">#87</a>)</li>
<li>Add car-eco/fast profiles + display energy/time - by <a href="https://github.com/abrensch">@abrensch</a> (<a href="https://github.com/nrenner/brouter-web/pull/95">#95</a>)</li>
<li>Improve error message if no route found - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/issues/99">#99</a>)</li>
<li>Support zoom 19 for German style - by <a href="https://github.com/giggls">@giggls</a> (<a href="https://github.com/nrenner/brouter-web/pull/128">#128</a>)</li>
</ul>
<h2 id="063-2017-03-16">0.6.3 (2017-03-16)</h2>
<ul>
<li>Fix data tab showing only two rows (regression from v0.6.2) (<a href="https://github.com/nrenner/brouter-web/issues/72">#72</a>)</li>
</ul>
<h2 id="062-2017-03-14">0.6.2 (2017-03-14)</h2>
<ul>
<li>Fix &quot;API Key Required&quot; in OpenCycleMap &amp; Outdoors by registering for Thunderforest &quot;Hobby Project&quot; plan (<a href="https://github.com/nrenner/brouter-web/issues/70">#70</a>)</li>
</ul>
<h2 id="061-2016-12-12">0.6.1 (2016-12-12)</h2>
<ul>
<li>Add Esri World Imagery layer (DigitalGlobe is now also blocked because monthly usage limit is exceeded)</li>
</ul>
<h2 id="060-2016-10-11">0.6.0 (2016-10-11)</h2>
<p>See also <a href="https://github.com/nrenner/brouter-web/milestone/1?closed=1">milestone 0.6.0</a>, remaining issues moved to <a href="https://github.com/nrenner/brouter-web/milestone/4">milestone 0.7.0</a></p>
<h3 id="featuresimprovements">Features/Improvements</h3>
<ul>
<li>Update OpenTopoMap zoom range to 0-17</li>
<li>[local installation] Option to remove default base layers (<a href="https://github.com/nrenner/brouter-web/issues/27">#27</a>)</li>
<li>Add tooltip to display length in meter precision (3 digits) (<a href="https://github.com/nrenner/brouter-web/issues/38">#38</a>)</li>
<li>Add &quot;mean cost&quot; to route statistics (<a href="https://github.com/nrenner/brouter-web/issues/39">#39</a>)</li>
<li>Set route transparency slider to partially transparent by default (<a href="https://github.com/nrenner/brouter-web/issues/36">#36</a>)</li>
<li>Show position in elevation diagram when hovering path on map (<a href="https://github.com/nrenner/brouter-web/issues/29">#29</a>)</li>
<li>[local installation] Added ability to specify custom overlays in configuration - by <a href="https://github.com/saesh">@saesh</a> (<a href="https://github.com/nrenner/brouter-web/pull/46">#46</a>)</li>
<li>Add button to get/follow the current location (leaflet.locatecontrol plugin) - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/49">#49</a>)</li>
<li>Save and restore last map position (leaflet.restoreview.js plugin) - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/49">#49</a>)</li>
<li>Toggle drawing mode via panel button - by <a href="https://github.com/bagage">@bagage</a> (<a href="https://github.com/nrenner/brouter-web/pull/50">#50</a>)</li>
<li>[local installation] add keys.js to configure API keys instead of bingkey request</li>
<li>Switch to new icon set (Font Awesome) with more options</li>
</ul>
<h3 id="bugfixes-14">Bugfixes</h3>
<ul>
<li>Replace Bing (usage limit exceeded) with DigitalGlobe Recent Imagery layer (newer images, but sometimes cloudy)</li>
<li>[local installation] Show error message for invalid server response with custom profiles on Windows (still needs to be fixed) (<a href="https://github.com/nrenner/brouter-web/issues/53">#53</a>)</li>
<li>Restrictive Cookie settings caused app to stop responding (<a href="https://github.com/nrenner/brouter-web/issues/47">#47</a>)</li>
</ul>
<h2 id="052-2015-08-27">0.5.2 (2015-08-27)</h2>
<ul>
<li>switch search from MapQuest to Nominatim (MapQuest licensing change)</li>
</ul>
<h2 id="051-2015-07-24">0.5.1 (2015-07-24)</h2>
<ul>
<li>config option <code>baseLayers</code> to add custom base layers locally (#24)</li>
<li>reset slider on page load to minimum opacity (#22),<br>customizable locally with config setting <code>minOpacity</code></li>
<li>set OpenTopoMap max zoom back to z15 while on fallback server (#21),<br>also fix max zoom of other services</li>
<li>overscale tiles to common max zoom (avoids gray screen when switching)</li>
</ul>
<h2 id="050-2015-07-01">0.5.0 (2015-07-01)</h2>
<h3 id="features">Features</h3>
<ul>
<li>Load profile content for selected profile (needs extra server locally)</li>
<li>Bing maps aerial layer (not working locally)</li>
<li>track color magenta instead of blue + white casing, for better contrast<br>with background map (esp. OpenCycleMap)</li>
<li>transparency slider for route track and markers</li>
<li>button to delete route (#10)</li>
<li>map scale</li>
<li>download all dependencies in a bundle, instead using CDNs and separate files (#18)</li>
<li>switch search plugin for result-dependent zoom</li>
<li>&quot;about&quot; popup with a bit more infos and links</li>
<li>closable error/warning messages, profile messages in place</li>
</ul>
<h3 id="bugfixes-15">Bugfixes</h3>
<ul>
<li>keys to enable/disable drawing (d, q/esc) now always work, not only when map is focused</li>
<li>fix adding new waypoint after deleting the last (#11)</li>
<li>fix profile/data scrolling on Firefox</li>
<li>hide trailer over controls and outside map</li>
</ul>
<h2 id="brouter-12">BRouter 1.2</h2>
<ul>
<li>data/CSV aggregated over segments with same tags (for better performance)</li>
</ul>
<h2 id="040-2015-03-08">0.4.0 (2015-03-08)</h2>
<ul>
<li>data tab (slow with long routes, exp. on Firefox)</li>
</ul>
`