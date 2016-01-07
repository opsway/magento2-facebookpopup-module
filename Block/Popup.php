<?php
namespace OpsWay\FacebookPopup\Block;

class Popup extends \Magento\Framework\View\Element\Template
{
    protected $scopeConfig;

    public function __construct(\Magento\Framework\View\Element\Template\Context $context, $data = array())
    {
        $this->scopeConfig = $context->getScopeConfig();
        parent::__construct($context, $data);
    }

    public function getTitle()
    {
        return $this->scopeConfig->getValue(
            'facebookpopup/configuration/title',
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );
    }

    public function getDescription()
    {
        return $this->scopeConfig->getValue(
            'facebookpopup/configuration/description',
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );
    }

    public function getFacebookURI()
    {
        return $this->scopeConfig->getValue(
            'facebookpopup/configuration/facebook_uri',
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );
    }

    public function getCloseText()
    {
        return $this->scopeConfig->getValue(
            'facebookpopup/configuration/close_text',
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );
    }
}
